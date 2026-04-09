export interface ContactFormData {
  name: string;
  company?: string;
  phone: string;
  service?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}
