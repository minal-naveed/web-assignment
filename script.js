// Task 1 & Task 5: Interactive Form Handling, Validation & Age Verification
const feedbackForm = document.getElementById('feedback-form');
const formMessage = document.getElementById('form-message');

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Page refresh hone se rokne ke liye

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const birthYearInput = document.getElementById('birth-year').value;

    if (username && email) {
        let message = `Thank you for visiting, ${username}! We will contact you at ${email}.`;

        // Task 5: Age Verification using parseInt()
        if (birthYearInput) {
            const birthYear = parseInt(birthYearInput);
            const currentYear = 2026;
            const age = currentYear - birthYear;

            // Student or Senior discount check
            if (age < 22 || age >= 60) {
                message += ` Congratulations! You qualify for a special discount (Age: ${age}).`;
            }
        }

        formMessage.textContent = message;
    }
});

// Task 2: Table Row Highlighting (Mouseover & Mouseout)
const tableRows = document.querySelectorAll('#menu-body tr');

tableRows.forEach(row => {
    row.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e0f7fa';
    });
    row.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});

// Task 3: Theme / Style Switcher
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Task 4: Interactive Order Total Calculator
const checkboxes = document.querySelectorAll('.order-item');
const totalDisplay = document.getElementById('total');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let total = 0;
        checkboxes.forEach(item => {
            if (item.checked) {
                total += parseFloat(item.value);
            }
        });
        totalDisplay.textContent = `Total Price: $${total}`;
    });
});

// Task 6: "Read More" Toggle for Cafe Article
const readMoreBtn = document.getElementById('read-more-btn');
const extraText = document.getElementById('extra-text');

readMoreBtn.addEventListener('click', function() {
    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        extraText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});

// Task 7: Live Category Filter for Menu Items
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        tableRows.forEach(row => {
            const rowCategory = row.getAttribute('data-category');
            if (category === 'all' || rowCategory === category) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

// Task 8: Dynamic Opening Status (Headings & Dates)
const statusBanner = document.getElementById('status-banner');
const currentHour = new Date().getHours();

// Cafe is open between 8 AM and 10 PM (8 to 22)
if (currentHour >= 8 && currentHour < 22) {
    statusBanner.textContent = 'We are Open!';
    statusBanner.style.color = 'green';
} else {
    statusBanner.textContent = 'Closed - Open at 8 AM';
    statusBanner.style.color = 'red';
}

// Task 9: Character Counter for Special Request Box
const specialNotes = document.getElementById('special-notes');
const charCounter = document.getElementById('char-counter');

specialNotes.addEventListener('input', function() {
    const maxLength = 100;
    const remaining = maxLength - specialNotes.value.length;
    charCounter.textContent = `${remaining} characters remaining`;
});