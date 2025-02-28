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

        function calculateTotal() {
            let prices = {
                Cleaning: {
                    "Deep Clean": 350,
                    "Sole Unyellowing": 750                    
                },
                Restoration: {
                    "Full Repaint": 1200,
                    "Full Outsole Reglue": 1200,
                    "Full Midsole Reglue": 1500,
                    "Sole Replacement": 3500,
                    "Sole Stitch": 300,
                    "Partial Repaint": 300,
                    "Partial Reglue": 400                    
                }                
            };
            
            if (serviceType.value && serviceName.value && prices[serviceType.value] && prices[serviceType.value][serviceName.value]) {
                totalPayment.value = `₱${prices[serviceType.value][serviceName.value] * numItems.value}`;
            }            
        }

        function resetForm() {
            firstName.value = "";
            lastName.value = "";
            contactNumber.value = "";
            email.value = "";
            shoeBrandModel.value = "";
            serviceType.value = "";
            serviceName.value = "";
            numItems.value = 1;
            totalPayment.value = "₱0";
            paymentMethod.value = "";
            deliveryType.value = "";
            address.street = "";
            address.city = "";
            address.postalCode = "";
            message.value = "";
            agreeToTerms.value = false;
            serviceOptions.value = [];
        }

        function submitForm() {
            showConfirmation.value = true;  
        }

        function confirmBooking() {
            alert("Booking confirmed successfully!");
            resetForm();
            showConfirmation.value = false;
            window.location.href = "index.html"; 
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
            calculateTotal,
            submitForm,
            confirmBooking,
            showConfirmation,
            goBack  
        };

    }
}).mount("#app");
