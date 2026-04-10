document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('confirm-modal');
    const btnCancel = document.getElementById('btn-cancel');
    const btnConfirm = document.getElementById('btn-confirm');
    const socialName = document.getElementById('social-name');
    const modalIcon = document.getElementById('modal-social-icon');

    // Mapeo de datos para el modal
    const socialData = {
        'fb': { name: 'Facebook', color: '#1877F2', icon: 'bxl-facebook' },
        'ig': { name: 'Instagram', color: '#E1306C', icon: 'bxl-instagram' },
        'wa': { name: 'WhatsApp', color: '#25D366', icon: 'bxl-whatsapp' }
    };

    // Interceptar clics en los botones flotantes
    document.querySelectorAll('.fab').forEach(fab => {
        fab.addEventListener('click', function(e) {
            e.preventDefault(); // Evita la redirección inmediata
            
            // Obtener qué red es
            const type = this.classList.contains('fb') ? 'fb' : 
                         this.classList.contains('ig') ? 'ig' : 'wa';
            
            const data = socialData[type];
            const url = this.getAttribute('href');

            // Configurar modal
            socialName.innerText = data.name;
            modalIcon.className = `bx ${data.icon}`;
            modalIcon.style.color = data.color;
            btnConfirm.href = url;
            btnConfirm.style.backgroundColor = data.color;

            // Mostrar modal
            modal.classList.add('active');
        });
    });

    // Cerrar modal
    btnCancel.addEventListener('click', () => modal.classList.remove('active'));
    btnConfirm.addEventListener('click', () => modal.classList.remove('active'));
});