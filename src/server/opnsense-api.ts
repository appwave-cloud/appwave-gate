import axios, { type AxiosError, type AxiosRequestConfig } from "axios";

// Error class for OpnSense API errors
export class OpnSenseApiError extends Error {
   constructor(
      message: string,
      public statusCode: number,
      public endpoint: string
   ) {
      super(message);
      this.name = 'OpnSenseApiError';
   }
}

/**
 * OpnSense API Service
 * 
 * This class provides a wrapper for the OpnSense API.
 * It handles authentication, request formatting, and error handling.
 *
 * @param firewallId - The ID of the firewall
 * @param baseUrl - The base URL of the OpnSense API
 * @param apiKey - The API key for the OpnSense API
 * @param apiSecret - The API secret for the OpnSense API
 * @param protocol - The protocol to use for the OpnSense API
 * 
 * @example
 * const api = new OpnSenseApiService("1234567890", "https://firewall.example.com", "apiKey", "apiSecret", "https");
 * const isConnected = await api.testConnection();
 * console.log(isConnected);
 */
export class OpnSenseApiService {
   private readonly firewallId: string;
   private baseUrl: string;
   private apiKey: string;
   private apiSecret: string;
   private protocol: "http" | "https";

   constructor(firewallId: string, baseUrl: string, apiKey: string, apiSecret: string, protocol: "http" | "https") {
      this.firewallId = firewallId;
      this.baseUrl = baseUrl;
      this.apiKey = apiKey;
      this.apiSecret = apiSecret;
      this.protocol = protocol;
   }

   // Test firewall connection
   async testConnection(): Promise<boolean> {
      try {
         const response = await this.makeRequest<{ status: string }>("/core/firmware/status", {
            method: "GET",
         });

         return response.status !== undefined;
      } catch {
         console.error("Failed to connect to firewall");
         return false;
      }
   }

   // Private request method
   private async makeRequest<T>(endpoint: string, options: AxiosRequestConfig): Promise<T> {
      const url = `${this.protocol}://${this.baseUrl}${endpoint}`;

      try {
         const response = await axios.request<T>({
            url,
            method: options.method,
            data: options.data,
            headers: {
               ...options.headers,
               ...this.getAuthHeaders(),
            },
         });

         return response.data;
      } catch (error) {
         throw new OpnSenseApiError("Failed to make request", (error as AxiosError).response?.status ?? 500, endpoint);
      }
   }

   // Get authentication headers
   private getAuthHeaders(): Record<string, string> {
      const credentials = Buffer.from(`${this.apiKey}:${this.apiSecret}`).toString('base64');

      return {
         'Authorization': `Basic ${credentials}`,
      };
   }
}