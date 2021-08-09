import React from 'react';
import { languageTxt } from '../../utils/languageTxt';

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

export const tableHeader = [languageTxt.typeOfInvester, languageTxt.score, languageTxt.riskProfile, languageTxt.suitableInvestmentScheme]


export const tableContent = [
    [languageTxt.securedOriented, languageTxt.score1, languageTxt.veryLow, languageTxt.moneyMarketScheme],
    [languageTxt.safetyOriented, languageTxt.score2, languageTxt.low, languageTxt.moneyMarketScheme2],
    [languageTxt.balancedConservative, languageTxt.score3, languageTxt.medium, languageTxt.islamicDividendPlan],
    [languageTxt.moderateGrowth, languageTxt.score4, languageTxt.medium, languageTxt.incomeFundAndInvestmentPlan],
    [languageTxt.growthOriented, languageTxt.score5, languageTxt.high, languageTxt.equity],
]