<template>
  <UPricingCard
    :title="festival.nom"
    :description="discipline.nom"
    icon="i-simple-icons-tailwindcss"
    :to="{ name: 'festival', params: { id: festival.id } }"
    target="_blank"
    highlight
    :badge="{ label: 'Date' }"
    :button="{ label: 'En savoir plus' }"
    :features="['Endroit', 'Portée', 'Plus de valeurs...']"
    orientation="horizontal"
    align="bottom"
    style="padding: 30px;"
  />
</template>

<script setup>
const props = defineProps({
  festival: Object,
});

let discipline = ref({});

onMounted(async () => {
  const disciplineApi = await fetch(
    `http://10.3.211.68:2000/api/v1/disciplines/${props.festival.disciplineId}`
  );
  discipline.value = await disciplineApi.json();
});
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.5rem;
  color: #000;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-body {
  padding: 1rem;
}

.card-actions {
  margin-top: 1rem;
}

.btn-primary {
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
