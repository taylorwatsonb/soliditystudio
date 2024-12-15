import { useState, useEffect } from 'react';
import { ValidationResult, validateContractCode } from '../utils/contract/validation';

export function useContractValidation(code: string) {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errors: []
  });

  useEffect(() => {
    const result = validateContractCode(code);
    setValidationResult(result);
  }, [code]);

  return validationResult;
}