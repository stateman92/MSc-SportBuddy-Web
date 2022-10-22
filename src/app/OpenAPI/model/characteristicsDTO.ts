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


export interface CharacteristicsDTO { 
    firstHalfPositionType?: CharacteristicsDTO.FirstHalfPositionTypeEnum;
    firstFullPositionType?: CharacteristicsDTO.FirstFullPositionTypeEnum;
    secondFullPositionType?: CharacteristicsDTO.SecondFullPositionTypeEnum;
    secondHalfPositionType?: CharacteristicsDTO.SecondHalfPositionTypeEnum;
    distanceType?: CharacteristicsDTO.DistanceTypeEnum;
    type: CharacteristicsDTO.TypeEnum;
}
export namespace CharacteristicsDTO {
    export type FirstHalfPositionTypeEnum = 'around0' | 'around45' | 'around90' | 'around135' | 'around180';
    export const FirstHalfPositionTypeEnum = {
        Around0: 'around0' as FirstHalfPositionTypeEnum,
        Around45: 'around45' as FirstHalfPositionTypeEnum,
        Around90: 'around90' as FirstHalfPositionTypeEnum,
        Around135: 'around135' as FirstHalfPositionTypeEnum,
        Around180: 'around180' as FirstHalfPositionTypeEnum
    };
    export type FirstFullPositionTypeEnum = 'around0' | 'around45' | 'around90' | 'around135' | 'around180' | 'around225' | 'around270' | 'around315';
    export const FirstFullPositionTypeEnum = {
        Around0: 'around0' as FirstFullPositionTypeEnum,
        Around45: 'around45' as FirstFullPositionTypeEnum,
        Around90: 'around90' as FirstFullPositionTypeEnum,
        Around135: 'around135' as FirstFullPositionTypeEnum,
        Around180: 'around180' as FirstFullPositionTypeEnum,
        Around225: 'around225' as FirstFullPositionTypeEnum,
        Around270: 'around270' as FirstFullPositionTypeEnum,
        Around315: 'around315' as FirstFullPositionTypeEnum
    };
    export type SecondFullPositionTypeEnum = 'around0' | 'around45' | 'around90' | 'around135' | 'around180' | 'around225' | 'around270' | 'around315';
    export const SecondFullPositionTypeEnum = {
        Around0: 'around0' as SecondFullPositionTypeEnum,
        Around45: 'around45' as SecondFullPositionTypeEnum,
        Around90: 'around90' as SecondFullPositionTypeEnum,
        Around135: 'around135' as SecondFullPositionTypeEnum,
        Around180: 'around180' as SecondFullPositionTypeEnum,
        Around225: 'around225' as SecondFullPositionTypeEnum,
        Around270: 'around270' as SecondFullPositionTypeEnum,
        Around315: 'around315' as SecondFullPositionTypeEnum
    };
    export type SecondHalfPositionTypeEnum = 'around0' | 'around45' | 'around90' | 'around135' | 'around180';
    export const SecondHalfPositionTypeEnum = {
        Around0: 'around0' as SecondHalfPositionTypeEnum,
        Around45: 'around45' as SecondHalfPositionTypeEnum,
        Around90: 'around90' as SecondHalfPositionTypeEnum,
        Around135: 'around135' as SecondHalfPositionTypeEnum,
        Around180: 'around180' as SecondHalfPositionTypeEnum
    };
    export type DistanceTypeEnum = 'around0' | 'around1' | 'around2' | 'around3' | 'around4' | 'aroundMinus1' | 'aroundMinus2' | 'aroundMinus3' | 'aroundMinus4';
    export const DistanceTypeEnum = {
        Around0: 'around0' as DistanceTypeEnum,
        Around1: 'around1' as DistanceTypeEnum,
        Around2: 'around2' as DistanceTypeEnum,
        Around3: 'around3' as DistanceTypeEnum,
        Around4: 'around4' as DistanceTypeEnum,
        AroundMinus1: 'aroundMinus1' as DistanceTypeEnum,
        AroundMinus2: 'aroundMinus2' as DistanceTypeEnum,
        AroundMinus3: 'aroundMinus3' as DistanceTypeEnum,
        AroundMinus4: 'aroundMinus4' as DistanceTypeEnum
    };
    export type TypeEnum = 'arms' | 'legs';
    export const TypeEnum = {
        Arms: 'arms' as TypeEnum,
        Legs: 'legs' as TypeEnum
    };
}


