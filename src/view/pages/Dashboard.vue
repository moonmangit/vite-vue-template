<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0">
        Dashboard Overview
      </h1>
      <PButton
        label="Download Report"
        icon="pi pi-download"
        size="small"
      />
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center',
              stat.colorClass,
            ]"
          >
            <i :class="[stat.icon, 'text-xl']"></i>
          </div>
          <span
            :class="[
              'text-sm font-medium',
              stat.trend > 0 ? 'text-emerald-500' : 'text-rose-500',
            ]"
          >
            {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
          </span>
        </div>
        <div class="text-surface-500 dark:text-surface-400 text-sm font-medium">
          {{ stat.label }}
        </div>
        <div
          class="text-2xl font-bold text-surface-900 dark:text-surface-0 mt-1"
        >
          {{ stat.value }}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Chart section -->
      <div
        class="lg:col-span-2 bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm"
      >
        <h2 class="text-lg font-semibold mb-6">Revenue Analysis</h2>
        <PChart
          type="line"
          :data="chartData"
          :options="chartOptions"
          class="h-80"
        />
      </div>

      <!-- Recent Activity -->
      <div
        class="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm"
      >
        <h2 class="text-lg font-semibold mb-6">Recent Activity</h2>
        <PDataTable
          :value="recentActivity"
          class="p-datatable-sm"
          :rows="5"
        >
          <PColumn
            field="user"
            header="User"
          >
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <PAvatar
                  :label="slotProps.data.user[0]"
                  shape="circle"
                  class="w-6 h-6 text-[10px]"
                />
                <span class="text-sm">{{ slotProps.data.user }}</span>
              </div>
            </template>
          </PColumn>
          <PColumn
            field="action"
            header="Action"
          >
            <template #body="slotProps">
              <span class="text-sm text-surface-600 dark:text-surface-400">{{
                slotProps.data.action
              }}</span>
            </template>
          </PColumn>
          <PColumn
            field="time"
            header="Time"
          >
            <template #body="slotProps">
              <span class="text-xs text-surface-400">{{
                slotProps.data.time
              }}</span>
            </template>
          </PColumn>
        </PDataTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const stats = [
  {
    label: 'Total Revenue',
    value: '$54,230',
    icon: 'pi pi-wallet',
    trend: 12.5,
    colorClass:
      'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    label: 'Active Users',
    value: '1,240',
    icon: 'pi pi-users',
    trend: 5.2,
    colorClass:
      'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
  },
  {
    label: 'New Orders',
    value: '452',
    icon: 'pi pi-shopping-cart',
    trend: -2.4,
    colorClass:
      'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
  },
  {
    label: 'Conversion Rate',
    value: '3.42%',
    icon: 'pi pi-percentage',
    trend: 1.1,
    colorClass:
      'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
  },
];

const recentActivity = ref([
  { user: 'John Doe', action: 'Purchased Item', time: '2 mins ago' },
  { user: 'Sarah Smith', action: 'New Sign up', time: '15 mins ago' },
  { user: 'Robert Brown', action: 'Updated Profile', time: '1 hour ago' },
  { user: 'Emma Wilson', action: 'Subscription Renewed', time: '3 hours ago' },
  { user: 'Michael Chen', action: 'Failed Login', time: '5 hours ago' },
]);

const chartData = ref();
const chartOptions = ref();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor:
          documentStyle.getPropertyValue('--color-emerald-500') || '#10b981',
        tension: 0.4,
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color') || '#6b7280';
  const surfaceBorder =
    documentStyle.getPropertyValue('--surface-border') || '#e5e7eb';

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };
};
</script>
