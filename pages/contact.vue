<script setup lang="ts">
const submitHandler = (value: any) => {
  console.log(value);
};
</script>

<template>
  <div class="px-4 md:py-6">
    <FormKit
      type="form"
      submit-label="Send"
      :submit-attrs="{
        inputClass:
          'bg-gray-800 text-gray-300 font-semibold mt-2 px-2 py-3 rounded-sm block w-full text-center',
      }"
      @submit="submitHandler"
      #default="{ value }"
    >
      <span class="block text-3xl font-black leading-12">Hi Victor,</span>
      <span class="block py-1">I am</span>
      <FormKit
        type="text"
        name="fullName"
        placeholder="Full Name"
        class="border rounded-sm"
      />
      <span class="block py-1">from</span>
      <FormKit
        type="text"
        name="companyName"
        placeholder="Company Name"
        class="border rounded-sm"
      />
      <span class="block">and I'm contacting you to:</span>
      <span class="text-[.8em] text-gray-500">
        Please select reason(s) for reaching out
      </span>
      <div class="flex gap-6 items-center py-2 pl-8">
        <FormKit type="checkbox" />
        <span>Schedule a time to talk</span>
      </div>
      <div class="flex gap-6 items-center py-2 pl-8">
        <FormKit type="checkbox" />
        <span>Discuss an open job or project</span>
      </div>
      <div class="flex gap-6 items-center py-2 pl-8">
        <FormKit type="checkbox" />
        <span>Request additional information</span>
      </div>
      <FormKit
        name="email"
        type="email"
        placeholder="Please enter your email address"
        class="border rounded-sm"
        outer-class="py-2"
      />
      <div class="flex gap-2">
        <FormKit
          type="select"
          name="country"
          class="border rounded-sm w-full"
          outer-class="w-[8.5rem]"
          :options="['+1', '+254', '+255']"
        />
        <FormKit
          type="text"
          name="phone"
          placeholder="723987456"
          class="w-full border rounded-sm"
          outer-class="w-full"
        />
      </div>
      <span>Looking forward to hearing from you!</span>
      <span class="block font-semibold py-1" v-if="value.fullName">
        {{ value.fullName }}.
      </span>
    </FormKit>
  </div>
</template>
