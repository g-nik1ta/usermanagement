<template>
    <div>
        <slot :name="slotName"></slot>
    </div>
</template>

<script>
export default {
    name: "slotsFilter",
    props: ['slotName'],
};
</script>

<style>
</style>