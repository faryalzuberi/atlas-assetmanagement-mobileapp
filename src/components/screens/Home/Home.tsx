import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import ModalStackScreen from '../../shared/ModalStackScreen/ModalStackScreen';
import {GuestHomeModal} from '../../modals/GuestHomeModal';
// AboutUs
import {AboutUs} from '../../modals/GuestHomeModal/AboutUs';
import {VisionMission} from '../../modals/GuestHomeModal/AboutUs/VisionMission';
import {Introduction} from '../../modals/GuestHomeModal/AboutUs/Introduction';
import {BoardOfDirectors} from '../../modals/GuestHomeModal/AboutUs/BoardOfDirectors';
import {ManagementTeam} from '../../modals/GuestHomeModal/AboutUs/ManagementTeam';
// WhatWeOffer
import {WhatWeOffer} from '../../modals/GuestHomeModal/WhatWeOffer';
import {CapitalPreservationPlan} from '../../modals/GuestHomeModal/WhatWeOffer/CapitalPreservationPlan';
import {InvestmentAdvisoryServices} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentAdvisoryServices';
// AtlasFunds
import {AtlasFunds} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasFunds';
import {AtlasMoneyMarketFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasFunds/AtlasMoneyMarketFund';
import {AtlasSovereignFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasFunds/AtlasSovereignFund';
import {AtlasIncomeFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasFunds/AtlasIncomeFund';
import {AtlasStockMarketFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasFunds/AtlasStockMarketFund';
// AtlasMeraj
import {AtlasMeraj} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasMeraj';
import {AtlasIslamicMoneyMarketFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasMeraj/AtlasIslamicMoneyMarketFund';
import {AtlasIslamicIncomeFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasMeraj/AtlasIslamicIncomeFund';
import {AtlasIslamicStockFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasMeraj/AtlasIslamicStockFund';
import {AtlasIslamicFundofFunds} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasMeraj/AtlasIslamicFundofFunds';
// AtlasPensions
import {AtlasPensions} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasPensions';
import {AtlasPensionFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasPensions/AtlasPensionFund';
import {AtlasPensionIslamicFund} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasPensions/AtlasPensionIslamicFund';
import {AtlasPensionsIncomePaymentPlans} from '../../modals/GuestHomeModal/WhatWeOffer/AtlasPensions/AtlasPensionsIncomePaymentPlans';
// InvestmentPlans
import {InvestmentPlans} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans';
import {AtlasBachatPlan} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/AtlasBachatPlan';
import {AtlasBachatBalancedPlan} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/AtlasBachatBalancedPlan';
import {AtlasBachatGrowthPlan} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/AtlasBachatGrowthPlan';
import {AtlasBachatIslamicPlan} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/AtlasBachatIslamicPlan';
import {AtlasBachatBalancedIslamicPlan} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/AtlasBachatBalancedIslamicPlan';
import {AtlasBachatGrowthIslamicPlan} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/AtlasBachatGrowthIslamicPlan';
import {SystematicPayout} from '../../modals/GuestHomeModal/WhatWeOffer/InvestmentPlans/SystematicPayout';
// AllocationPlans
import {AllocationPlans} from '../../modals/GuestHomeModal/WhatWeOffer/AllocationPlans';
import {AtlasConservativeAllocationIslamicPlan} from '../../modals/GuestHomeModal/WhatWeOffer/AllocationPlans/AtlasConservativeAllocationIslamicPlan';
import {AtlasModerateAllocationIslamicPlan} from '../../modals/GuestHomeModal/WhatWeOffer/AllocationPlans/AtlasModerateAllocationIslamicPlan';
import {AtlasAggressiveAllocationIslamicPlan} from '../../modals/GuestHomeModal/WhatWeOffer/AllocationPlans/AtlasAggressiveAllocationIslamicPlan';
import {AtlasIslamicDividendPlan} from '../../modals/GuestHomeModal/WhatWeOffer/AllocationPlans/AtlasIslamicDividendPlan';

export const Home = ({navigation}: any) => {
  const items = [
    {
      name: 'GuestHomeModal',
      component: GuestHomeModal,
      backButton: false,
      handleOnBack: () => {},
    },
    // Start AboutUs
    {
      name: 'AboutUs',
      component: AboutUs,
      backButton: true,
      handleOnBack: () => navigation.navigate('GuestHomeModal'),
    },
    {
      name: 'VisionMission',
      component: VisionMission,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'Introduction',
      component: Introduction,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'BoardOfDirectors',
      component: BoardOfDirectors,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'ManagementTeam',
      component: ManagementTeam,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    // End AboutUs
    // Start WhatWeOffer
    {
      name: 'WhatWeOffer',
      component: WhatWeOffer,
      backButton: true,
      handleOnBack: () => navigation.navigate('GuestHomeModal'),
    },
    {
      name: 'AtlasFunds',
      component: AtlasFunds,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    {
      name: 'AtlasMeraj',
      component: AtlasMeraj,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    {
      name: 'AtlasPensions',
      component: AtlasPensions,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    {
      name: 'InvestmentPlans',
      component: InvestmentPlans,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    {
      name: 'AllocationPlans',
      component: AllocationPlans,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    {
      name: 'CapitalPreservationPlan',
      component: CapitalPreservationPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    {
      name: 'InvestmentAdvisoryServices',
      component: InvestmentAdvisoryServices,
      backButton: true,
      handleOnBack: () => navigation.navigate('WhatWeOffer'),
    },
    // AtlasFunds
    {
      name: 'AtlasMoneyMarketFund',
      component: AtlasMoneyMarketFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasFunds'),
    },
    {
      name: 'AtlasSovereignFund',
      component: AtlasSovereignFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasFunds'),
    },
    {
      name: 'AtlasIncomeFund',
      component: AtlasIncomeFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasFunds'),
    },
    {
      name: 'AtlasStockMarketFund',
      component: AtlasStockMarketFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasFunds'),
    },
    // AtlasMeraj
    {
      name: 'AtlasIslamicMoneyMarketFund',
      component: AtlasIslamicMoneyMarketFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasMeraj'),
    },
    {
      name: 'AtlasIslamicIncomeFund',
      component: AtlasIslamicIncomeFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasMeraj'),
    },
    {
      name: 'AtlasIslamicStockFund',
      component: AtlasIslamicStockFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasMeraj'),
    },
    {
      name: 'AtlasIslamicFundofFunds',
      component: AtlasIslamicFundofFunds,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasMeraj'),
    },
    // AtlasPensions
    {
      name: 'AtlasPensionFund',
      component: AtlasPensionFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasPensions'),
    },
    {
      name: 'AtlasPensionIslamicFund',
      component: AtlasPensionIslamicFund,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasPensions'),
    },
    {
      name: 'AtlasPensionsIncomePaymentPlans',
      component: AtlasPensionsIncomePaymentPlans,
      backButton: true,
      handleOnBack: () => navigation.navigate('AtlasPensions'),
    },
    // InvestmentPlans
    {
      name: 'AtlasBachatPlan',
      component: AtlasBachatPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    {
      name: 'AtlasBachatBalancedPlan',
      component: AtlasBachatBalancedPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    {
      name: 'AtlasBachatGrowthPlan',
      component: AtlasBachatGrowthPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    {
      name: 'AtlasBachatIslamicPlan',
      component: AtlasBachatIslamicPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    {
      name: 'AtlasBachatBalancedIslamicPlan',
      component: AtlasBachatBalancedIslamicPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    {
      name: 'AtlasBachatGrowthIslamicPlan',
      component: AtlasBachatGrowthIslamicPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    {
      name: 'SystematicPayout',
      component: SystematicPayout,
      backButton: true,
      handleOnBack: () => navigation.navigate('InvestmentPlans'),
    },
    // AllocationPlans
    {
      name: 'AtlasAggressiveAllocationIslamicPlan',
      component: AtlasAggressiveAllocationIslamicPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('AllocationPlans'),
    },
    {
      name: 'AtlasModerateAllocationIslamicPlan',
      component: AtlasModerateAllocationIslamicPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('AllocationPlans'),
    },
    {
      name: 'AtlasConservativeAllocationIslamicPlan',
      component: AtlasConservativeAllocationIslamicPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('AllocationPlans'),
    },
    {
      name: 'AtlasIslamicDividendPlan',
      component: AtlasIslamicDividendPlan,
      backButton: true,
      handleOnBack: () => navigation.navigate('AllocationPlans'),
    },

    // End WhatWeOffer
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalStackScreen items={items} />
    </SafeAreaView>
  );
};
