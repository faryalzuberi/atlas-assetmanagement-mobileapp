import React from 'react';
import {languageTxt} from '../../utils/languageTxt';

export const list1 = [
    { id: 1, value: languageTxt.veryHigh, name: languageTxt.veryHigh, selected: false },
    { id: 2, value: languageTxt.high, name: languageTxt.high, selected: false },
    { id: 3, value: languageTxt.moderate, name: languageTxt.moderate, selected: false },
    { id: 4, value: languageTxt.low, name: languageTxt.low, selected: false },
    { id: 5, value: languageTxt.veryLow, name: languageTxt.veryLow, selected: false },
]

export const list2 = [
    { id: 1, value: languageTxt.capitalPreservation, name: languageTxt.capitalPreservation, selected: false },
    { id: 2, value: languageTxt.capitalPreservationAndIncome, name: languageTxt.capitalPreservationAndIncome, selected: false },
    { id: 3, value: languageTxt.incomeAndLongTermGrowth, name: languageTxt.incomeAndLongTermGrowth, selected: false },
    { id: 4, value: languageTxt.capitalGrowth, name: languageTxt.capitalGrowth, selected: false },
]

export const list3 = [
    { id: 1, value: languageTxt.shortTerm, name: languageTxt.shortTerm, selected: false },
    { id: 2, value: languageTxt.MediumTerm, name: languageTxt.MediumTerm, selected: false },
    { id: 3, value: languageTxt.MediumToLongTerm, name: languageTxt.MediumToLongTerm, selected: false },
    { id: 4, value: languageTxt.LongTerm, name: languageTxt.LongTerm, selected: false },
]



export const list4 = [
    { id: 1, value: languageTxt.littleOrNoKnowledge, name: languageTxt.littleOrNoKnowledge, selected: false },
    { id: 2, value: languageTxt.someKnowledge, name: languageTxt.someKnowledge, selected: false },
    { id: 3, value: languageTxt.bothKnowledgeAndExperianced, name: languageTxt.bothKnowledgeAndExperianced, selected: false },
]

export const list5 = [
    { id: 1, value: languageTxt.verySecure, name: languageTxt.verySecure, selected: false },
    { id: 2, value: languageTxt.someWhat, name: languageTxt.someWhat, selected: false },
    { id: 3, value: languageTxt.notSecure, name: languageTxt.notSecure, selected: false },
    { id: 4, value: languageTxt.likelyWorse, name: languageTxt.likelyWorse, selected: false },
]

export const tableHeader= [
    {key: 1, value: languageTxt.typeOfInvester },
    {key: 2, value: languageTxt.score },
    {key: 3, value: languageTxt.riskProfile },
    {key: 4, value: languageTxt.suitableInvestmentScheme },
    
]

export const tableContent = [
    {key:1, rowValue1: languageTxt.securedOriented, rowValue2: languageTxt.score1, rowValue3: languageTxt.veryLow, rowValue4: languageTxt.moneyMarketScheme},
    {key:2, rowValue1: languageTxt.safetyOriented, rowValue2: languageTxt.score2, rowValue3: languageTxt.low, rowValue4: languageTxt.moneyMarketScheme2},
    {key:3, rowValue1: languageTxt.balancedConservative, rowValue2: languageTxt.score3, rowValue3: languageTxt.medium, rowValue4: languageTxt.islamicDividendPlan},
    {key:4, rowValue1: languageTxt.moderateGrowth, rowValue2: languageTxt.score4, rowValue3: languageTxt.medium, rowValue4: languageTxt.incomeFundAndInvestmentPlan},
    {key:5, rowValue1: languageTxt.growthOriented, rowValue2: languageTxt.score5, rowValue3: languageTxt.high, rowValue4: languageTxt.equity},
]