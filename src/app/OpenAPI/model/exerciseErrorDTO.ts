/**
 * SportBuddy
 * API specification for my thesis work
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: abc@def.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CharacteristicsDTO } from './characteristicsDTO';


export interface ExerciseErrorDTO { 
    characteristics: CharacteristicsDTO;
    /**
     * the identifier of the client side text
     */
    error: string;
}

