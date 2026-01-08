import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="relative">
        <div className="title flex align-center items-center justify-center min-h-[350px] bg-primary-teal mt-[70px]">
          <h1 className="text-primary-white font-source font-[400] title">Privacy Policy</h1>
        </div>
        <div className="privacy-content md:py-[100px] py-[70px]">
          <div className="container mx-auto px-4">
            <p className="mb-6 ">
              Bitpastel recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. 
              This Policy describes how we treat user information we collect on www.bitpastel.com and other offline sources. 
              This Privacy Policy applies to current and former visitors to our website. 
              By visiting and/or using our website, you agree to this Privacy Policy.
            </p>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">Information we collect</h5>
              <ul className="list-none pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Contact information: </span> 
                  We might collect your name, email, mobile number, and ip address.
                </li>
                <li>
                  <span className="font-semibold">Information you post: </span> 
                  We collect information you post in a public space on our website or on a third-party social media site belonging to Bitpastel.
                </li>
                <li>
                  <span className="font-semibold">Other information: </span> 
                  If you use our website, we may collect information about your IP address and the browser you're using. 
                  We might look at what site you came from, duration of time spent on our website, pages accessed.
                </li>
              </ul>
            </article>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">We collect information in different ways</h5>
              <ul className="list-none pl-5 space-y-2">
                <li>
                  <span className="font-semibold">We collect information directly from you: </span> 
                  We collect information directly from you when you fill out any forms on our website. 
                  We also collect information if you ask us a question through phone or email.
                </li>
                <li>
                  <span className="font-semibold">We collect information from you passively: </span> 
                  We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.
                </li>
                <li>
                  <span className="font-semibold">We get information about you from third parties:</span> 
                  For example, if you use an integrated social media feature on our websites. 
                  The third-party social media site will give us certain information about you. This could include your name and email address.
                </li>
              </ul>
            </article>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">Use of your personal information</h5>
              <ul className="list-none pl-5 space-y-2">
                <li>
                  <span className="font-semibold">We use information to contact you: </span>
                  We might use the information you provide to contact you.
                </li>
                <li>
                  <span className="font-semibold">We get information about you from third parties: </span> 
                  We use information for security purposes. We may use information to protect our company, our clients, or our websites. 
                  We use information as otherwise permitted by law.
                </li>
              </ul>
            </article>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">Sharing of information with third-parties</h5>
              <ul className="list-none pl-5 space-y-2">
                <li>
                  <span className="font-semibold">We may share information with third parties who perform services on our behalf: </span> 
                  We may share information with vendors who help us manage our recruitment process. Some vendors may be located outside of India.
                </li>
                <li>
                  <span className="font-semibold">We may share information if we think we have to in order to comply with the law or to protect ourselves: </span> 
                  We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. 
                  Or, we might also share information when we are investigating potential fraud.
                </li>
                <li>
                  <span className="font-semibold">We may share information with any successor to all or part of our busines: </span> 
                  For example, if part of our business is sold we may give our customer list as part of that transaction.
                </li>
                <li>
                  <span className="font-semibold">We may share your information for reasons not described in this policy: </span> 
                  We will tell you before we do this.
                </li>
              </ul>
            </article>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">Miscellaneous Communications</h5>
              <ul className="list-none pl-5 space-y-2">
                <li>
                  We can use this data to contact you via call, email, SMS, social networking websites or other electronic communication channels for promotion, 
                  recruitment or marketing purposes. You can choose to opt out of receiving our communications. To stop receiving these communication, 
                  please email connect[at]bitpastel.com. It may take about 30 days to process your request. Even if you opt out of getting promotional 
                  communications and messages, we will still be sending you transactional messages through email or SMS about your purchases or job 
                  applications at the company.
                </li>
              </ul>
            </article>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">Third party sites</h5>
              <ul className='list-none pl-5 space-y-2'>
                <li>
                  If you click on one of the links to third party websites, you may be taken to websites we do not control. 
                  This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. 
                  We are not responsible for these third party sites.If you have any questions about this Policy or other privacy concerns, 
                  you can also email us at connect[at]bitpastel.com
                </li>
              </ul>
            </article>

            <article className="mb-8">
              <h5 className="font-source mb-3 subheading font-[600]">Updates to this policy</h5>
              <ul className='list-none pl-5 space-y-2'>
                <li>
                    This Privacy Policy was last updated on 31st October 2018. From time to time we may change our privacy practices. 
                    Please check our site periodically for updates.
                </li>
              </ul>
            </article>

            <article className="">
              <h5 className="font-source mb-3 subheading font-[600]">Jurisdiction</h5>
              <ul className='list-none pl-5 space-y-2'>
                <li>
                  If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website's terms of use. 
                  In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;