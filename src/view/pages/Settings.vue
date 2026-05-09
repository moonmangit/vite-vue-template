<template>
  <div class="space-y-6">
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0">
        Settings
      </h1>
      <p class="text-surface-500 dark:text-surface-400">
        Manage your profile and application preferences.
      </p>
    </div>

    <div
      class="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm overflow-hidden"
    >
      <PTabs value="0">
        <PTabList>
          <PTab value="0">Profile</PTab>
          <PTab value="1">System</PTab>
          <PTab value="2">Notifications</PTab>
          <PTab value="3">Security</PTab>
        </PTabList>
        <PTabPanels>
          <!-- Profile Tab -->
          <PTabPanel value="0">
            <div class="space-y-6 max-w-2xl py-4">
              <div class="flex items-center gap-6">
                <PAvatar
                  label="A"
                  shape="circle"
                  class="w-20 h-20 text-2xl font-bold bg-primary text-primary-contrast"
                />
                <div class="space-y-2">
                  <PButton
                    label="Change Avatar"
                    size="small"
                  />
                  <PButton
                    label="Remove"
                    text
                    severity="danger"
                    size="small"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                  <label class="font-semibold">First Name</label>
                  <PInputText v-model="profile.firstName" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="font-semibold">Last Name</label>
                  <PInputText v-model="profile.lastName" />
                </div>
                <div class="flex flex-col gap-2 md:col-span-2">
                  <label class="font-semibold">Email Address</label>
                  <PInputText
                    v-model="profile.email"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-col gap-2 md:col-span-2">
                  <label class="font-semibold">Bio</label>
                  <PInputText
                    v-model="profile.bio"
                    class="w-full"
                  />
                </div>
              </div>
              <PButton label="Save Changes" />
            </div>
          </PTabPanel>

          <!-- System Tab -->
          <PTabPanel value="1">
            <div class="space-y-6 max-w-2xl py-4">
              <div class="flex flex-col gap-4">
                <div
                  class="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800/50 rounded-xl"
                >
                  <div>
                    <div class="font-semibold">Dark Mode</div>
                    <div class="text-sm text-surface-500">
                      Use dark theme across the application.
                    </div>
                  </div>
                  <PButton
                    :label="themeStore.isDark ? 'Enabled' : 'Disabled'"
                    :severity="themeStore.isDark ? 'primary' : 'secondary'"
                    size="small"
                    @click="themeStore.toggleTheme"
                  />
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800/50 rounded-xl"
                >
                  <div>
                    <div class="font-semibold">Language</div>
                    <div class="text-sm text-surface-500">
                      Select your preferred language.
                    </div>
                  </div>
                  <PButton
                    label="English (US)"
                    severity="secondary"
                    size="small"
                    disabled
                  />
                </div>
              </div>
            </div>
          </PTabPanel>

          <PTabPanel value="2">
            <div class="py-10 text-center text-surface-400">
              <i class="pi pi-bell text-4xl mb-4"></i>
              <p>Notification settings coming soon.</p>
            </div>
          </PTabPanel>

          <PTabPanel value="3">
            <div class="py-10 text-center text-surface-400">
              <i class="pi pi-lock text-4xl mb-4"></i>
              <p>Security settings coming soon.</p>
            </div>
          </PTabPanel>
        </PTabPanels>
      </PTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from '../../stores/theme';

const themeStore = useTheme();

const profile = ref({
  firstName: 'Admin',
  lastName: 'User',
  email: 'admin@example.com',
  bio: 'Senior Frontend Engineer focused on Vue and Tailwind.',
});
</script>
