import './Home.css';
import { useEffect, useState } from "react";
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

function HomeComponent() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const addStudent = async () => {
        const docRef = await addDoc(collection(db, "Students"), {
            email: email,
            name: name,
            phone: phone,
            age: age,
            address: address
        }).then(() => {
            alert("Student Successfully Added !");
            clearTexts();
        }).catch(() => {
            alert("Student Adding Failed !")
        });
    }

    const deleteStudent = async () => {
        await deleteDoc(doc(db, "Students", "KXoMIq2KMHiZYjvHDUns")) // last point - object id
            .then(() => {
                alert("Student Deleted !")
            }).catch(() => {
                alert("Delete Failed !")
            });
    }

    const getStudents = async () => {
        const querySnapshot = await getDocs(collection(db, "Students"));
        setStudents(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }

    const clearTexts = () => {
        setEmail('');
        setName('');
        setPhone('');
        setAge('');
        setAddress('');
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                            <input type="email" value={phone} onChange={(e) => { setPhone(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="0777777777" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Age</label>
                            <input type="email" value={age} onChange={(e) => { setAge(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="25" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                            <input type="email" value={address} onChange={(e) => { setAddress(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="colombo" />
                        </div>
                        <button type="button" class="btn btn-primary" onClick={addStudent}>Save Student</button>
                        <button type="button" class="btn btn-danger" style={{ marginLeft: 10 }} onClick={deleteStudent}>Delete Student</button>
                    </div>
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map(student => {
                                        return (
                                            <tr>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.address}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;