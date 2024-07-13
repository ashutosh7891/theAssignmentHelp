import Accordion from 'react-bootstrap/Accordion';
import "./Style.css";
import { useEffect, useState } from 'react';

function Faq(props) {

  
    return (
        <>

            <section id="faq" style={{"marginTop": '2rem'}}>
                <div className="container-fluid">
                    <div className="container">
                        <h2 id="faq-heading" className="text-center py-md-4">Frequently Asked Questions</h2>
                        <div className="row mb-5">
                            <Accordion >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Accordion.Item className='mb-3 shadow' eventKey="0">
                                            <Accordion.Header>What are University Assignment Help services?</Accordion.Header>
                                            <Accordion.Body>
                                            <b>University assignment help services</b> provide professional assistance to students in completing their academic assignments. These services encompass writing, editing, research, and proofreading, ensuring that assignments meet academic standards and are of high quality. The primary goal is to help students achieve better academic performance by offering expert guidance and solutions tailored to their specific needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="1">
                                            <Accordion.Header>Can I pay someone to do my assignment for me in the UK?</Accordion.Header>
                                            <Accordion.Body >
                                            Yes, you can pay someone to do your assignment for you in the UK. At <b>UniversityAssignmentHelp.uk</b>, we offer professional <b>University assignment help services</b> designed to ensure your assignments are completed accurately and on time. Our experienced <b>assignment writers</b> are well-versed in various subjects and can provide customised solutions to meet your academic requirements.   
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="2">
                                            <Accordion.Header>What is the best assignment help in UK service for students?</Accordion.Header>
                                            <Accordion.Body>
                                            The <b>best assignment help  in UK service</b> for students is UniversityAssignmentHelp.uk as it offers reliable, high-quality assistance with experienced assignment experts, timely delivery, and customised solutions. Our assignment experts are dedicated to providing top-notch assignment help services, ensuring that students receive the support they need to excel academically.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="3">
                                            <Accordion.Header>How to do university assignments in the UK?</Accordion.Header>
                                            <Accordion.Body>
                                            <b>To do university assignments in the UK effectively, follow these steps:</b>
                                            <ul>
                                                <li>Understand the assignment requirements thoroughly</li>
                                                <li>Conduct comprehensive research on the topic</li>
                                                <li>Create an outline to organize your thoughts and structure your assignment</li>
                                                <li>Write the assignment, ensuring clarity, coherence, and adherence to academic standards</li>
                                                <li>Edit and proofread the final draft to eliminate errors and improve quality</li>
                                                <li>Properly format and reference your work according to the required style guide</li>
                                            </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="4">
                                            <Accordion.Header>Can I trust your assignment experts with my Management assignment?</Accordion.Header>
                                            <Accordion.Body>
                                            Yes, you can trust our <b>assignment experts</b> at <b>UniversityAssignmentHelp.uk</b> with your Management assignment. Our <b>university assignment help experts</b> are highly qualified and experienced in providing accurate and well-researched solutions for Management assignments. They are dedicated to delivering high-quality work that meets academic standards and helps you achieve your academic goals.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className="col-lg-6">
                                        <Accordion.Item className='mb-3 shadow' eventKey="5">
                                            <Accordion.Header>Do you have subject matter experts for various assignments?</Accordion.Header>
                                            <Accordion.Body>
                                            Yes, we have subject matter experts for a wide range of assignments. Our <b>University assignment help</b> team includes specialists in Management, Programming, Accounting, Law, Finance, Marketing, Nursing, Economics, Engineering, Statistics, Computer Science, and Mathematics. Each expert is knowledgeable in their field and capable of providing high-quality, tailored assistance
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="6">
                                            <Accordion.Header>Can I get help if I am based in Birmingham?</Accordion.Header>
                                            <Accordion.Body>
                                            Yes, you can get help if you are based in Birmingham. Our <b>university assignment help</b> services are available to students across the UK, including Birmingham. We are committed to providing comprehensive support to students, regardless of their location.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="7">
                                            <Accordion.Header>What if I am not satisfied with the delivered assignment?</Accordion.Header>
                                            <Accordion.Body>
                                            You can request revisions from our <b>assignment writers</b> in case you are not satisfied with the assignment. We are committed to ensuring your satisfaction and will make necessary adjustments to meet your requirements. Our goal is to provide you with high-quality assignments that align with your academic standards and expectations.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="8">
                                            <Accordion.Header>Do you provide help with urgent assignments?</Accordion.Header>
                                            <Accordion.Body>
                                            Yes, we provide help with urgent assignments. Our <b>university assignment help</b> team is equipped to handle tight deadlines and deliver high-quality work within the specified time frame. We understand the importance of meeting deadlines and are dedicated to providing timely assistance to help you succeed.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className='mb-3 shadow' eventKey="9">
                                            <Accordion.Header>Can I get cheap assignment help if my budget is low?</Accordion.Header>
                                            <Accordion.Body>
                                            Yes, we offer affordable <b>university assignment help</b> services to cater to students with varying budgets. Our aim is to provide quality assistance without compromising on affordability. We strive to make our services accessible to all students, ensuring that you receive the support you need, regardless of your budget constraints.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </div>
                            </Accordion>




                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Faq;