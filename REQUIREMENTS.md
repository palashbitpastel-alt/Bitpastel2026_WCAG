# YP Platform Requirements (Admin Panel + Web Frontend)

This document defines the required scope for completing the **YP Platform** across:

- **Admin Panel (Django Backend Templates)**
- **Web Frontend (Next.js + Django REST APIs)**

Claude Code + A5C Babysitter must traverse both codebases and implement missing pieces end-to-end while keeping full compatibility with the existing architecture.

---

# ✅ Global Mandatory Guidelines

These rules apply to **all modules**:

1. **Resolve any issues if found**
   - If any workflow is broken, incomplete, or inconsistent, it must be fixed fully.

2. **Do NOT change the existing coding structure**
   - Claude must first understand the current architecture.
   - Adapt to existing implementation patterns.
   - Extend functionality without restructuring modules.

3. **Validations must work properly**
   - Frontend validations must be enforced where applicable.
   - Backend validations must always enforce correctness even if frontend is bypassed.

---

### Requirement

### Need to implement

# 1. Add one more option to the Modal.tsx file I want there were some option present 
### Current Option 
- Shopify Store 
- Website 
- Mobile App
- Custom SaaS
- Ecommerce Site
- UI/UX Design  
- Digital Marketing

### Updated Option 
- Store Speed Optimization
- Shopify Store 
- Website 
- Mobile App
- Custom SaaS
- Ecommerce Site
- UI/UX Design  
- Digital Marketing

Please Follow the ordering also 

# 2. Chat With Us button Functionality 
Need to update one logic I want to open the Modal.tsx file with the page route /free-quote but i want it will open in Every page like a modal but need page url /free-quote


### Note : 
- I am Facing one problem When i am opening the /free-quote from any page like i am explaining if i am a    
  user i am in /culture page then i open themodal /free-quote open but when i close the modal it is sending me to root page / this 
  is a bug if i was open the modal from culture page or partner page or career page when i close the modal it will stay on that   
  particular page not to the root page 

# ✅ Final Mandatory Validation Requirement

**All Admin panel and Web frontend workflows must have fully working frontend validations and backend validations.  
No feature is considered complete unless validation is correctly enforced at both layers and all flows operate without errors.**
