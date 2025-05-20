import { format, parseISO } from 'date-fns';

/**
 * Format a date into a readable string
 * @param date Date to format
 * @returns Formatted date string (e.g., "April 20, 2024")
 */
export function formatDate(date: Date): string {
  return format(date, 'MMMM d, yyyy');
}

/**
 * Parse an ISO date string and format it
 * @param dateString ISO date string
 * @returns Formatted date string
 */
export function formatDateString(dateString: string): string {
  return formatDate(parseISO(dateString));
}