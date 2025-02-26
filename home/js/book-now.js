Vue.createApp({
    setup() {
        let firstName = Vue.ref("");
        let lastName = Vue.ref("");
        let contactNumber = Vue.ref("");
        let email = Vue.ref("");
        let shoeBrandModel = Vue.ref("");
        let serviceType = Vue.ref("");
        let serviceName = Vue.ref("");
        let numItems = Vue.ref(1);
        let totalPayment = Vue.ref("₱0");
        let paymentMethod = Vue.ref("");
        let deliveryType = Vue.ref("Store Pickup");
        let address = Vue.reactive({ street: "", city: "", postalCode: "" });
        let serviceOptions = Vue.ref([]);
        let message = Vue.ref("");
        let agreeToTerms = Vue.ref(false);
        

        let services = {
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

        let availableServices = Vue.computed(() => services[serviceType.value] || {});

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
            serviceName.value = "";
        }

        function updateServiceOptions() {
            serviceName.value = "";
            totalPayment.value = "₱0";
        }

        function calculateTotal() {
            if (serviceName.value && numItems.value > 0) {
                let basePrice = services[serviceType.value][serviceName.value];
                let expectedTotal = `₱${(basePrice * numItems.value).toLocaleString()}`;
                if (totalPayment.value === "" || totalPayment.value === `₱${basePrice.toLocaleString()}`) {
                    totalPayment.value = expectedTotal
                }
            }
        }

        async function submitForm() {

            if (!agreeToTerms.value) {
                alert("You must agree to the terms and conditions before submitting.");
                return;
            }

            let supabase = supabase.createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

            let { error } = await supabase.from("bookings").insert([
                {
                    first_name: firstName.value,
                    last_name: lastName.value,
                    contact_number: contactNumber.value,
                    email: email.value,
                    shoe_brand_model: shoeBrandModel.value,
                    service_type: serviceType.value,
                    service_name: serviceName.value,
                    num_items: numItems.value,
                    total_payment: totalPayment.value,
                    payment_method: paymentMethod.value,
                    delivery_type: deliveryType.value,
                    address_street: address.value.street,
                    address_city: address.value.city,
                    address_postal_code: address.value.postalCode,
                    
                }
            ]);

            
            if (error) {
                alert("Error booking service: " + error.message);
            } else {
                alert("Booking submitted successfully!");
                resetForm();
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
            deliveryType.value = "Store Pickup";
            address.value = { street: "", city: "", postalCode: "" };
            serviceOptions.value = [];
            message.value = "";
            agreeToTerms.value = false;
            
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
            serviceOptions,
            message,
            agreeToTerms,
            updateServiceNames,
            updateServiceOptions,
            calculateTotal,
            submitForm
        };
    }
}).mount("#app");