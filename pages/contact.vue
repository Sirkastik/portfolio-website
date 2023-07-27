<script setup lang="ts">
const submitHandler = (value: any) => {
  console.log(value);
};
</script>

<template>
  <div class="px-4 md:px-8 py-4 mb-auto">
    <FormKit
      type="form"
      submit-label="Send"
      :submit-attrs="{
        inputClass:
          'bg-gray-800 text-gray-300 font-semibold mt-2 px-2 py-3 rounded block w-full text-center',
      }"
      @submit="submitHandler"
      #default="{ value }"
    >
      <span class="block pb-2 text-3xl font-black leading-12">Hi Victor,</span>
      <FormKit
        type="text"
        name="fullName"
        label="I am"
        placeholder="Full Name"
        input-class="rounded h-10 text-sm"
        label-class="font-normal pb-1"
      />
      <FormKit
        type="text"
        name="companyName"
        label="from"
        placeholder="Company Name"
        input-class="rounded h-10 text-sm"
        label-class="font-normal pb-1"
      />
      <span class="block">and I'm contacting you to:</span>
      <span class="text-[.8em] text-gray-500 block mb-4 font-semibold">
        Please select reason(s) for reaching out
      </span>
      <FormKit
        type="checkbox"
        label="Schedule a time to talk"
        outer-class="relative"
        input-class="top-[2px] rounded"
        label-class="ml-6"
      />
      <FormKit
        type="checkbox"
        label="Discuss an open job or project"
        outer-class="relative"
        input-class="top-[2px] rounded"
        label-class="ml-6"
      />
      <FormKit
        type="checkbox"
        label="Request additional information"
        outer-class="relative"
        input-class="top-[2px] rounded"
        label-class="ml-6"
      />
      <FormKit
        name="email"
        type="email"
        label="Email"
        placeholder="Please enter your email address"
        class="border rounded-sm"
        outer-class="py-2"
        input-class="rounded h-10 text-sm"
        label-class="invisible absolute -z-10"
      />
      <div class="flex gap-2">
        <FormKit
          type="select"
          name="country"
          label="Country"
          outer-class="w-[8.5rem] relative"
          input-class="rounded h-10 text-sm"
          :options="['+1', '+254', '+255']"
          label-class="invisible absolute -z-10"
        />
        <FormKit
          type="text"
          name="phone"
          label="Phone"
          placeholder="723 987 456"
          outer-class="w-full"
          input-class="rounded h-10 text-sm"
          label-class="invisible absolute -z-10"
        />
      </div>
      <span>Looking forward to hearing from you!</span>
      <span class="block font-semibold py-1" v-if="value.fullName">
        {{ value.fullName }}.
      </span>
    </FormKit>
  </div>
</template>
