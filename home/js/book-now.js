const { createApp } = Vue;
const supabase = supabase.createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

createApp({
    setup() {
        const firstName = ref("");
        const lastName = ref("");
        const contactNumber = ref("");
        const email = ref("");
        const serviceType = ref("");
        const serviceName = ref("");
        const numItems = ref(1);
        const totalPayment = ref("₱0");
        const paymentMethod = ref("");
        const deliveryType = ref("");

        const services = {
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

        const availableServices = computed(() => services[serviceType.value] || {});

        function updateServiceOptions() {
            serviceName.value = "";
            totalPayment.value = "₱0";
        }

        function calculateTotal() {
            if (serviceName.value && numItems.value > 0) {
                const price = services[serviceType.value][serviceName.value];
                totalPayment.value = `₱${(price * numItems.value).toLocaleString()}`;
            } else {
                totalPayment.value = "₱0";
            }
        }

        async function submitForm() {
            const { error } = await supabase.from("bookings").insert([
                {
                    first_name: firstName.value,
                    last_name: lastName.value,
                    contact_number: contactNumber.value,
                    email: email.value,
                    service_type: serviceType.value,
                    service_name: serviceName.value,
                    num_items: numItems.value,
                    total_payment: totalPayment.value,
                    payment_method: paymentMethod.value,
                    delivery_type: deliveryType.value
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
            serviceType.value = "";
            serviceName.value = "";
            numItems.value = 1;
            totalPayment.value = "₱0";
            paymentMethod.value = "";
            deliveryType.value = "";
        }

        return {
            firstName,
            lastName,
            contactNumber,
            email,
            serviceType,
            serviceName,
            numItems,
            totalPayment,
            paymentMethod,
            deliveryType,
            availableServices,
            updateServiceOptions,
            calculateTotal,
            submitForm
        };
    }
}).mount("#app");
