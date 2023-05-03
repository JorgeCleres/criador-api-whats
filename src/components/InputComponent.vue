<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input :class="classeInput" :type="tipoInput" :name="nameInput" :value="modelValue" @input="updateValue" :placeholder="placeholder">
        <img v-if="image" :src="image" alt="fundo">
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
            required: false,
            type: [String, Number, Function],
        },
        placeholder: {
            required: false,
            type: [String, Number],
        },
        tipoInput: {
            required: true,
            type: [String, Number],
        },
        image: {
            required: true,
            type: String,
        },
        classeInput: {
            require: true,
            type: String
        },
        nameInput: {
            require: false,
            type: String
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('inputValue', event.target.value)
        }
    }
}
</script>