/* ==========================================================================
   Certifications
   --------------------------------------------------------------------------
   TO ADD A CERTIFICATION: copy a block, drop it in the array, save.

   Fields
     name      (required) Full credential name.
     issuer    (required) Awarding body.
     abbr                 Short badge text drawn inside the seal. Keep it to
                          1–3 characters ("AWS", "CKA", "GCP").
     level                Optional tier: "Foundational", "Associate",
                          "Professional", "Specialty".
     issued               "Nov 2025". Omit if you'd rather not show it.
     expires              "Nov 2028". Omit for credentials that don't lapse.
     credentialUrl        Link to the verification page, if you have one.
   ========================================================================== */

const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    abbr: "AWS",
    level: "Associate",
    // issued: "",
    // expires: "",
    // credentialUrl: "",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    abbr: "AWS",
    level: "Foundational",
    // issued: "",
    // expires: "",
    // credentialUrl: "",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    abbr: "AWS",
    level: "Foundational",
    issued: "Nov 2025",
    expires: "Nov 2028",
    // credentialUrl: "",
  },
];
