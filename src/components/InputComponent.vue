<template>
    <div>
        <label for="exampleInputEmail1">{{ label }}</label>
        <input class="form-control" :type="tipoInput" :value="modelValue" @input="updateValue" :placeholder="placeholder">
    </div>
</template>


<script>
export default {
    props: {
        modelValue: {
            type: [String, Number],
            required: true
        },
        label: {
            required: true,
            type: [String, Number, Function],
        },
        placeholder: {
            required: true,
            type: [String, Number],
        },
        tipoInput: {
            required: true,
            type: [String, Number],
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('inputValue', event.target.value)
        }
    }
}
</script>