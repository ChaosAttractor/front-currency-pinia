<template>
  <div>
    <v-simple-table fixed-header height="900px">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header" class="text-center">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getterCurrency" :key="item.NumCode">
            <td>{{ item.NumCode }}</td>
            <td>{{ item.CharCode }}</td>
            <td>{{ item.Nominal }}</td>
            <td>{{ item.Name }}</td>
            <td class="flex flex-center gap-5px">
              {{ item.Value }}
              <StonksIcon :value="item.Value" :previous="item.Previous" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
console.log(process.env.VUE_APP_API_URL);
export default {
  name: "CurrencyView",

  components: {},
  data() {
    return {
      headers: ["Цифр. код", "Бук. код", "Единиц", "Валюта", "Курс"],
    };
  },
};
</script>
