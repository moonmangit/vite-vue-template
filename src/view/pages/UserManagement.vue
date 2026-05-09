<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0">
          User Management
        </h1>
        <p class="text-surface-500 dark:text-surface-400">
          Manage your organization members and their roles.
        </p>
      </div>
      <PButton
        label="Create User"
        icon="pi pi-plus"
        @click="showCreateModal = true"
      />
    </div>

    <div
      class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm overflow-hidden"
    >
      <PDataTable
        v-model:filters="filters"
        :value="users"
        paginator
        :rows="10"
        dataKey="id"
        filterDisplay="menu"
        :globalFilterFields="['name', 'email', 'role']"
        class="p-datatable-lg"
      >
        <template #header>
          <div class="flex justify-between items-center px-2 py-1">
            <span class="relative">
              <i
                class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"
              ></i>
              <PInputText
                v-model="filters['global'].value"
                placeholder="Search users..."
                class="pl-10 w-64"
              />
            </span>
            <div class="flex gap-2">
              <PButton
                icon="pi pi-filter-slash"
                text
                severity="secondary"
                @click="clearFilters"
              />
            </div>
          </div>
        </template>

        <PColumn
          field="name"
          header="User"
          sortable
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <PAvatar
                :label="data.name[0]"
                shape="circle"
                class="bg-primary-100 text-primary-700 font-bold"
              />
              <div class="flex flex-col">
                <span
                  class="font-semibold text-surface-900 dark:text-surface-0"
                  >{{ data.name }}</span
                >
                <span class="text-xs text-surface-500">{{ data.email }}</span>
              </div>
            </div>
          </template>
        </PColumn>

        <PColumn
          field="role"
          header="Role"
          sortable
        >
          <template #body="{ data }">
            <span
              :class="[
                'px-2 py-1 rounded-full text-xs font-medium',
                getRoleClass(data.role),
              ]"
            >
              {{ data.role }}
            </span>
          </template>
        </PColumn>

        <PColumn
          field="status"
          header="Status"
          sortable
        >
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <span
                :class="[
                  'w-2 h-2 rounded-full',
                  data.status === 'Active'
                    ? 'bg-emerald-500'
                    : 'bg-surface-300',
                ]"
              ></span>
              <span class="text-sm">{{ data.status }}</span>
            </div>
          </template>
        </PColumn>

        <PColumn
          field="lastLogin"
          header="Last Login"
          sortable
        ></PColumn>

        <PColumn
          header="Actions"
          alignFrozen="right"
          frozen
        >
          <template #body>
            <div class="flex gap-2">
              <PButton
                icon="pi pi-pencil"
                text
                rounded
                severity="secondary"
              />
              <PButton
                icon="pi pi-trash"
                text
                rounded
                severity="danger"
              />
            </div>
          </template>
        </PColumn>
      </PDataTable>
    </div>

    <!-- Create User Dialog -->
    <PDialog
      v-model:visible="showCreateModal"
      modal
      header="Create New User"
      :style="{ width: '30rem' }"
    >
      <div class="space-y-4 pt-2">
        <div class="flex flex-col gap-2">
          <label
            for="name"
            class="font-semibold"
            >Full Name</label
          >
          <PInputText
            id="name"
            v-model="newUser.name"
            placeholder="Enter name"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label
            for="email"
            class="font-semibold"
            >Email Address</label
          >
          <PInputText
            id="email"
            v-model="newUser.email"
            placeholder="Enter email"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label
            for="role"
            class="font-semibold"
            >Role</label
          >
          <PInputText
            id="role"
            v-model="newUser.role"
            placeholder="e.g. Administrator"
          />
        </div>
      </div>
      <template #footer>
        <PButton
          label="Cancel"
          text
          severity="secondary"
          @click="showCreateModal = false"
        />
        <PButton
          label="Create User"
          @click="saveUser"
        />
      </template>
    </PDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';

const users = ref([
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '2025-05-12',
  },
  {
    id: 2,
    name: 'Bob Wilson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2025-05-10',
  },
  {
    id: 3,
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    role: 'Viewer',
    status: 'Inactive',
    lastLogin: '2025-04-28',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '2025-05-13',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2025-05-11',
  },
]);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  role: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const showCreateModal = ref(false);
const newUser = ref({ name: '', email: '', role: '' });

const clearFilters = () => {
  filters.value.global.value = null;
};

const getRoleClass = (role: string) => {
  switch (role) {
    case 'Administrator':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Editor':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
    default:
      return 'bg-surface-100 text-surface-700 dark:bg-surface-800 dark:text-surface-400';
  }
};

const saveUser = () => {
  // Logic to save user
  showCreateModal.value = false;
  newUser.value = { name: '', email: '', role: '' };
};
</script>
