### Hospital Management System  

The **Hospital Management System** is a robust web application designed to streamline hospital operations by providing distinct functionalities for admins, doctors, patients, and the pharmacy. This system ensures efficient hospital management by leveraging modern technologies and a role-based access control mechanism.  

---

### Features  

#### **Admin Features:**  
- Add new doctors with detailed information (name, department, email, etc.).  
- Remove doctors from the hospital's database.  
- View a comprehensive list of all doctors in the hospital.  

#### **Doctor Features:**  
- Access their appointment schedule, including patient details and appointment times.  
- Write and save prescriptions with details such as patient name, prescription content, and date.  

#### **Patient Features:**  
- Book appointments based on the desired doctor’s department, with a list of available doctors.  
- View the total number of doctors in the hospital categorized by department.  
- Upload prescriptions received from doctors to the pharmacy with details and upload dates.  

---

### Technical Specifications  

#### **Backend:**  
- Built with **Node.js** and **Express** for a scalable and efficient backend.  
- **MongoDB** is used for data storage, managing doctors, patients, prescriptions, and appointments.  

#### **Frontend:**  
- Developed with **React.js** for a dynamic and responsive user interface.  
- Includes dedicated components for admin, doctor, patient, and pharmacy views.  

#### **Authentication & Authorization:**  
- Role-based access control implemented using **JWT tokens** for secure user authentication.  
- Users are segmented into roles (Admin, Doctor, Patient, Pharmacy) for controlled access to features.
  
#### **UI Design:**  
- Styled with **Material UI**, offering a clean and intuitive interface for users.  

---

### Installation Instructions  

#### Clone the repository:  
```bash  
git clone https://github.com/yourusername/hospital-management-system.git  
```  

#### Install frontend dependencies:  
```bash  
cd frontend  
npm install  
```  

#### Install backend dependencies:  
```bash  
cd backend  
npm install  
```  

#### Update the MongoDB connection string:  
Edit the `/backend/server.js` and `/backend/createAdmin.js` files in the backend directory to include your MongoDB connection string:  
```javascript  
// MongoDB connection  
mongoose.connect('<your_MongoDB_connection_string>', {  
```  

#### Create the first admin user:  
Edit the `/backend/createAdmin.js` file to include your admin details:  
```javascript  
const admin = new Admin({  
  firstName: "abc",  
  lastName: "xyz",  
  email: "abc@gmail.com",  
  password: "xyz123",   
  role: "admin"  
});  
```  
Then, execute the file once to create the admin user:  
```bash  
node createAdmin.js  
```  

---

### Running the Application  

#### Start the backend server:  
```bash  
cd backend  
node server.js  
```  

#### Start the frontend application:  
```bash  
cd frontend  
npm start  
```  

#### Open the application in your browser:  
Navigate to `http://localhost:3000` to view the application.  

---

### Future Enhancements  
- Full implementation of pharmacy management with stock purchase and inventory control.  
- Enhanced analytics and reporting features for admins.  
- Integration with third-party APIs for payment gateways and notifications.  
