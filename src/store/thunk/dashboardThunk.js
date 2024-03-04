import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading, setChildLoading, setLotalLoading, setLoadingKeywordChartHistory } from 'store/slices/dataLoadingSlice';
import { notificationFail, notificationSuccess } from 'store/slices/notificationSlice';
import {
  setDashboardData,
  setDashboardDateRange,
  setDashboardPieChartData,
  setDashboardStoreData,
  setGroupByPPC,
  setGroupByProduct,
  setGroupBySales,
  setNewSalesMatrics,
  setPnlByItemData,
  setPnlByItemExport,
  setPnlDashboardData,
  setPpcByItemData,
  setPpcProductCategory,
  setProductVariant,
  setSalesByBrandData,
  setSalesDashboardData,
  setSalesMetricsChart,
  setSalesVDashboardData,
  setStoreIdChart,
  setTagId,
  setmenuFilterType,
  setmenuFilterTypeChart,
  setChildData,
  setByItemTotal,
  setByCategoryTotal,
  setByGroupTotal,
  setKeywordHistoryData,
  setDashboardJobList
} from 'store/slices/dashboardSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';

export const getPPCDashboardDataByDate = createAsyncThunk('getPPCDashboardDataByDate', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/ppc/dashboard`, _request);

    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(setDashboardData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getSalesDashboardData = createAsyncThunk('getSalesDashboardData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/dashboard`, _request);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(setSalesDashboardData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getSalesDashboardVData = createAsyncThunk('getSalesDashboardVData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/v2/sales-dashboard`, _request);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(setSalesVDashboardData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getPnlDashboardData = createAsyncThunk('getPnlDashboardData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/pnl-dashboard`, _request);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(setPnlDashboardData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getPnlByItemData = createAsyncThunk('getPnlByItemData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`pnl-dashboard/pnl-by-item`, _request);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(setPnlByItemData(response?.data));
      dispatch(getAllTotalByItemData(_request));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});
export const getAllTotalByItemData = createAsyncThunk('getAllTotalByItemData', async (_request, { dispatch }) => {
  try {
    dispatch(setLotalLoading(true));
    const response = await apiClient().post(`pnl-dashboard/pnl-by-item-total`, _request);
    dispatch(setLotalLoading(false));

    if (response?.data) {
      dispatch(setByItemTotal(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLotalLoading(false));
    dispatch(notificationFail('Error while fetching total of records.'));
  }
});

export const getPpcProductCategory = createAsyncThunk('getPpcProductCategory', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`ppc/ppc-product-category`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setPpcProductCategory(response?.data));
      dispatch(getAllTotalByCategoryData(_request));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getAllTotalByCategoryData = createAsyncThunk('getAllTotalByCategoryData', async (_request, { dispatch }) => {
  try {
    dispatch(setLotalLoading(true));
    const response = await apiClient().post(`ppc/ppc-product-category-total`, _request);
    dispatch(setLotalLoading(false));

    if (response?.data) {
      dispatch(setByCategoryTotal(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLotalLoading(false));
    dispatch(notificationFail('Error while fetching total of records.'));
  }
});

export const getGroupByProduct = createAsyncThunk('getGroupByProduct', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/product/product-brand`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setGroupByProduct(response?.data));
      dispatch(getAllTotalByGroupData(_request));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getGroupByPPC = createAsyncThunk('getGroupByProduct', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/product/product-brand`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setGroupByPPC(response?.data));
      dispatch(getAllTotalByGroupData(_request));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getAllTotalByGroupData = createAsyncThunk('getAllTotalByGroupData', async (_request, { dispatch }) => {
  try {
    dispatch(setLotalLoading(true));
    const response = await apiClient().post(`/product/product-brand-total`, _request);
    dispatch(setLotalLoading(false));

    if (response?.data) {
      dispatch(setByGroupTotal(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLotalLoading(false));
    dispatch(notificationFail('Error while fetching total of records.'));
  }
});

export const getGroupBySales = createAsyncThunk('getGroupByProduct', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/product/product-brand`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setGroupBySales(response?.data));
      dispatch(getAllTotalByGroupData(_request));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getProductVariant = createAsyncThunk('getProductVariant', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/product/product-varient`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setProductVariant(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getSalesByBrand = createAsyncThunk('getSalesByBrand', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`product/product-brand`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setSalesByBrandData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getPpcByItemData = createAsyncThunk('getPpcByItemData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`ppc/ppc-item`, _request);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(setPpcByItemData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getStoreListData = createAsyncThunk('getStoreListData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`store-management/get-store `);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setDashboardStoreData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getJobListing = createAsyncThunk('getJobListing', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`jobs/listing`);
    console.log("response", response);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setDashboardJobList(response?.data?.jobs));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});


export const viewJobList = createAsyncThunk('viewJobList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`jobs`);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setDashboardJobList(response?.data?.jobs));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});


export const deleteJob = createAsyncThunk('deleteJob', async (_request, { dispatch }) => {

  console.log("neww_request", _request);
  try {
    dispatch(setLoading(true));
    const response = await apiClient().delete(`job/delete/${_request.id}`);
    dispatch(setLoading(false));
    console.log("mmmmmmmmm", response);
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(viewJobList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});


export const dashboardPieChart = createAsyncThunk('dashboardPieChart', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/dashboard/pie-chart`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setDashboardPieChartData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const dateRangePicker = createAsyncThunk('dateRangePicker', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setDashboardDateRange(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const pnlByItemExport = createAsyncThunk('pnlByItemExport', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setPnlByItemExport(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const menuFilterType = createAsyncThunk('menuFilterType', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setmenuFilterType(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const menuFilterTypeChart = createAsyncThunk('menuFilterType', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setmenuFilterTypeChart(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const salesMetricsMenu = createAsyncThunk('salesMetricsMenu', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setSalesMetricsChart(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const newSalesMatrics = createAsyncThunk('newSalesMatrics', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setNewSalesMatrics(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getStoreId = createAsyncThunk('getStoreId', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setStoreIdChart(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getTagId = createAsyncThunk('getTagId', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(setTagId(_request));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const storeSelection = createAsyncThunk('storeSelection', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    dispatch(notificationFail('at least one store must be selected'));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getChildData = createAsyncThunk('getChildData', async (_request, { dispatch }) => {
  try {
    dispatch(setChildLoading(true));
    const response = await apiClient().post(`/product/child-product-brand`, _request);
    dispatch(setChildLoading(false));
    if (response?.data) {
      dispatch(setChildData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setChildLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});
export const getKeywordHistory = createAsyncThunk('getKeywordHistory', async (_request, { dispatch }) => {
  try {
    dispatch(setLoadingKeywordChartHistory(true));
    const response = await apiClient().post(`/keywords/keyword-history`, _request);
    dispatch(setLoadingKeywordChartHistory(false));
    if (response?.data) {
      dispatch(setKeywordHistoryData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoadingKeywordChartHistory(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});
