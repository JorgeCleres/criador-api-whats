<template>
    <!-- <div class="accordion" id="accordionExample"> -->
        <div class="accordion-item" :id="1+idParam">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+idParam"
                    aria-expanded="true" :aria-controls="idParam">
                    {{titleAccordion}}
                </button>
            </h2>
            <div :id="idParam" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
/* eslint-disable */
export default {
    props: ['titleAccordion', 'idParam']
}
</script>

<style>
    .accordion {
        width: 80% !important;
        margin: 15px auto;
    }

    .accordion-button:not(.collapsed) {
        color: grey !important;
        background-color: #ffffff !important;
        box-shadow: 0 0 0 white !important;
    }

    button.accordion-button {
        color: grey !important;
        background-color: #ffffff !important;
        box-shadow: 0 0 0 white !important;
    }

    .accordion-button:focus {
        z-index: 3 !important;
        border-color: #ffffff !important;
        outline: 0 !important;
        box-shadow: 0 0 0 white !important;
    }

    @media(max-width: 480px) {
        .accordion {
            width: 95% !important;
            margin: 15px auto;
        }
    }
</style>