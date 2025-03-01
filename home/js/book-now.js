const { createApp, ref, reactive } = Vue;

createApp({
    setup() {        
        const firstName = ref("");
        const lastName = ref("");
        const contactNumber = ref("");
        const email = ref("");
        const shoeBrandModel = ref("");
        const serviceType = ref("");
        const serviceName = ref("");
        const numItems = ref(1);
        const totalPayment = ref("₱0");
        const paymentMethod = ref("");
        const deliveryType = ref("");
        const address = reactive({
            street: "",
            city: "",
            postalCode: ""
        });
        const message = ref("");
        const agreeToTerms = ref(false);
        const showConfirmation = ref(false); 
        
        const serviceOptions = ref([]);

        const goBack = () => {
            if (window.history.length > 1) {
                window.history.back(); 
            } else {
                window.location.href = "index.html";  
            }
        };

        function updateServiceNames() {
            if (serviceType.value === "Cleaning") {
                serviceOptions.value = ["Deep Clean", "Sole Unyellowing"];
            } else if (serviceType.value === "Restoration") {
                serviceOptions.value = [
                    "Full Repaint",
                    "Full Outsole Reglue",
                    "Full Midsole Reglue",
                    "Sole Replacement",
                    "Sole Stitch",
                    "Partial Repaint",
                    "Partial Reglue"
                ];
            } else {
                serviceOptions.value = [];
            }
        }

        function submitForm() {
            showConfirmation.value = true;  
        }

        return {
            firstName,
            lastName,
            contactNumber,
            email,
            shoeBrandModel,
            serviceType,
            serviceName,
            numItems,
            totalPayment,
            paymentMethod,
            deliveryType,
            address,
            message,
            agreeToTerms,
            serviceOptions,
            updateServiceNames,
            submitForm,
            showConfirmation,
            goBack
        };
    }
}).mount("#app");
