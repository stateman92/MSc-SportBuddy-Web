/**
 * SportBuddy
 * API specification for my thesis work SportBuddy
 *
 * The version of the OpenAPI document: 1.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ChatEntryDTO } from './chatEntryDTO';


export interface ChatDTO { 
    chatEntries: Array<ChatEntryDTO>;
    image: string;
    primaryId: string;
    users: Array<string>;
    otherParty: string;
}

