const { createApp } = Vue;
const supabase = supabase.createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

createApp({
    data() {
        return {
            form: {
                firstName: "",
                lastName: "",
                contact: "",
                email: "",
                houseNumber: "",
                street: "",
                barangay: "",
                city: "",
                province: "",
                postalCode: "",
                serviceType: "",
                serviceName: "",
                items: 1,
                totalPayment: 0,
                paymentDate: "",
                paymentMethod: "",
                deliveryType: "",
            },
            services: {
                Cleaning: [
                    { name: "Deep Clean", price: 350 },
                    { name: "Sole Unyellowing", price: 750 },
                ],
                Restoration: [
                    { name: "Full Repaint", price: 1200 },
                    { name: "Full Outsole Reglue", price: 1200 },
                    { name: "Full Midsole Reglue", price: 1500 },
                    { name: "Sole Replacement", price: 3500 },
                    { name: "Sole Stitch", price: 300 },
                    { name: "Partial Repaint", price: 300 },
                    { name: "Partial Reglue", price: 400 },
                ],
            },
            availableServices: [],
        };
    },
    methods: {
        updateServiceOptions() {
            this.availableServices = this.services[this.form.serviceType] || [];
            this.form.serviceName = "";
            this.form.totalPayment = 0;
        },
        updatePrice() {
            const selectedService = this.availableServices.find(s => s.name === this.form.serviceName);
            if (selectedService) {
                this.form.totalPayment = selectedService.price * this.form.items;
            }
        },
        calculateTotal() {
            this.updatePrice();
        },
        async submitForm() {
            const { error } = await supabase.from("bookings").insert([this.form]);
            if (error) {
                alert("Error submitting booking.");
            } else {
                alert("Booking successful!");
                location.reload();
            }
        },
    },
}).mount("#app");
