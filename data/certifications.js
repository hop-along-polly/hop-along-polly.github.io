/* ==========================================================================
   Certifications
   --------------------------------------------------------------------------
   TO ADD A CERTIFICATION: copy a block, drop it in the array, save.

   Fields
     name      (required) Full credential name.
     issuer    (required) Awarding body.
     abbr                 Short badge text drawn inside the seal. Keep it to
                          1 to 3 characters ("AWS", "CKA", "GCP").
     level                Optional tier: "Foundational", "Associate",
                          "Professional", "Specialty".
     expires              "May 22 2029". Drives both the printed expiration
                          line and the Active / Expired pill. Omit for
                          credentials that never lapse.
     credentialUrl        Link to the verification page, if you have one.
   ========================================================================== */

const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    abbr: "AWS",
    level: "Associate",
    expires: "May 22 2029",
    // credentialUrl: "",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    abbr: "AWS",
    level: "Foundational",
    expires: "Sep 23 2029",
    // credentialUrl: "",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    abbr: "AWS",
    level: "Foundational",
    expires: "May 22 2029",
    // credentialUrl: "",
  },
];
