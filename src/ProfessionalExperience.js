// src/components/ProfessionalExperience.js
import React from 'react';
import './ProfessionalExperience.css'; // Add styles for professional experience

const ProfessionalExperience = () => {
    return (
        <div className="professional-experience">
            <ul>
                <li>
                    <h3>Tech Lead, HCL</h3>
                    <p><strong>March 2024 - Present</strong></p>
                    <p>Seeking opportunities/projects in various domains.</p>
                </li>
                <li>
                    <h3>Senior Data Engineer, LTIMindtree</h3>
                    <p><strong>Jan 2023 - Dec 2023</strong></p>
                    <p>Developed ETL pipelines and data migration jobs using Python, PySpark, GCP, Apache Beam, Airflow, Azure Data Factory, Databricks, SQL, and MongoDB. Worked on a project for Procter & Gamble.</p>
                </li>
                <li>
                    <h3>Various Roles, Tata Consultancy Services</h3>
                    <p><strong>Jan 2019 - Jan 2023</strong></p>
                    <ul>
                        <li>
                            <h4>Python Developer, PWC</h4>
                            <p><strong>Jan 2019 - June 2020</strong></p>
                            <p>Developed tools and web scraping scripts, generated reports using Python, Linux, Shell scripting, Batch scripting, and SQL.</p>
                        </li>
                        <li>
                            <h4>GCP Data Engineer, Ingram Micro</h4>
                            <p><strong>July 2020 - Feb 2021</strong></p>
                            <p>Migrated data to Google Cloud using Apache Beam, Python, SQL, and GCP. Developed a tool to translate Oracle DDLs to BigQuery DDL using Python.</p>
                        </li>
                        <li>
                            <h4>Senior Software Developer, Google</h4>
                            <p><strong>March 2021 - Jan 2023</strong></p>
                            <p>Worked with Google Document AI in pre-training models and testing performance. Assisted clients with data migration and data engineering tasks using Python, PySpark, Apache Beam, Airflow, Vertex AI, Document AI, SQL, Pandas, Kafka, etc.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ProfessionalExperience;