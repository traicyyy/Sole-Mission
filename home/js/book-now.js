const { createApp } = Vue;
const supabase = supabase.createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            houseNumber: '',
            street: '',
            barangay: '',
            city: '',
            province: '',
            postalCode: '',
            serviceType: '',
            serviceName: '',
            numberOfItems: 1,
            totalPayment: 0,
            paymentDate: '',
            paymentMethod: '',
            deliveryType: '',
            serviceOptions: []
        };
    },
    methods: {
        updateServiceNames() {
            const services = {
                Cleaning: [
                    { name: 'Deep Clean', price: 350 },
                    { name: 'Sole Unyellowing', price: 750 }
                ],
                Restoration: [
                    { name: 'Full Repaint', price: 1200 },
                    { name: 'Full Outsole Reglue', price: 1200 },
                    { name: 'Full Midsole Reglue', price: 1500 },
                    { name: 'Sole Replacement (Cleaning Included)', price: 3500 },
                    { name: 'Sole Stitch', price: 300 },
                    { name: 'Partial Repaint', price: 300 },
                    { name: 'Partial Reglue', price: 400 }
                ]
            };

            this.serviceOptions = services[this.serviceType] || [];
            this.serviceName = '';
            this.totalPayment = 0;
        },
        calculateTotal() {
            const selectedService = this.serviceOptions.find(service => service.name === this.serviceName);
            if (selectedService) {
                this.totalPayment = selectedService.price * this.numberOfItems;
            }
        },
        async submitForm() {
            const { error } = await supabase.from('bookings').insert([
                {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    contact_number: this.contactNumber,
                    email: this.email,
                    house_number: this.houseNumber,
                    street: this.street,
                    barangay: this.barangay,
                    city: this.city,
                    province: this.province,
                    postal_code: this.postalCode,
                    service_type: this.serviceType,
                    service_name: this.serviceName,
                    number_of_items: this.numberOfItems,
                    total_payment: this.totalPayment,
                    payment_date: this.paymentDate,
                    payment_method: this.paymentMethod,
                    delivery_type: this.deliveryType
                }
            ]);

            if (error) {
                alert('Error submitting booking.');
                console.error(error);
            } else {
                alert('Booking successfully submitted!');
            }
        }
    }
}).mount('#app');
