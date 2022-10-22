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
import { ExerciseErrorDTO } from './exerciseErrorDTO';


export interface ExerciseMomentDTO { 
    armCharacteristics: CharacteristicsDTO;
    legCharacteristics: CharacteristicsDTO;
    errors: Array<ExerciseErrorDTO>;
}
