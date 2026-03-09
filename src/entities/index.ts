/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: contactsubmissions
 * Interface for ContactSubmissions
 */
export interface ContactSubmissions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  emailAddress?: string;
  /** @wixFieldType text */
  subject?: string;
  /** @wixFieldType text */
  message?: string;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
}


/**
 * Collection ID: locations
 * Interface for Locations
 */
export interface Locations {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  locationName?: string;
  /** @wixFieldType text */
  address?: string;
  /** @wixFieldType text */
  operatingHours?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  locationImage?: string;
}


/**
 * Collection ID: menuitems
 * Interface for MenuItems
 */
export interface MenuItems {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  dishName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  dishImage?: string;
  /** @wixFieldType text */
  category?: string;
}
