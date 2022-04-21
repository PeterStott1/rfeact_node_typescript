/**
 * Organisation objects allow you to associate actions performed
 * in the system with the organisation that performed them.
 * The Organisation object contains common information across
 * every organisations in the system regardless of subscription and role.
 */
export interface Organisation {
  /**
   * UNique identifier
   */
  id: number;
  /**
   * Orgnaisation name
   */
  name: string;
  /**
   * compnay vat number
   */
  vat_number: string;
  /**
   * first line address of the compnay
   */
  address_line_1: string;
  /**
   * company city
   */
  address_city: string;
  /***
   * company postcode
   */
  address_postcode: string;
  /**
   * current status pof company
   */
  status: string;
  /**
   * current owner of the company
   */
  owner: string;
  /**
   * whether they are an agent for another company
   */
  is_agent: boolean;
  /**
   * date created in the system
   */
  created_at: Date;
}
