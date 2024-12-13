const SELECTORS = [
  {
    "id": "007",
    "hardware_version": "AMD SEV-SNP",
    "launch_measurement": "2c903ad1d0837a71cc7d6b70c5a95b26ffb1c10b9751043b8321152f853e4b0e",
    "firmware_version": "1.5.1",
    "score": 125,
    "feedback": [
      "Works well with newer AMD processors, but requires the latest firmware updates."
    ]
  },
  {
    "id": "005",
    "hardware_version": "ARM TrustZone",
    "launch_measurement": "a33b89c5ef0123f5a4e93d7677d7f8c3567a5d364d7e0f9b9c8cd8fca1a9a4e2",
    "firmware_version": "2.1.0",
    "score": 110,
    "feedback": [
      "Effective for mobile and embedded systems, but lacks support for more complex computing environments."
    ]
  },
  {
    "id": "008",
    "hardware_version": "Intel TDX",
    "launch_measurement": "3ab3b8a34f8b6f019ee4b299321bbff1b67d4faeddefd1b1fef8759d9d5f98c7",
    "firmware_version": "2.0.0",
    "score": 130,
    "feedback": [
      "Runs smoothly with Intels TDX but may require adjustments for legacy hardware."
    ]
  },
  {
    "id": "004",
    "hardware_version": "AMD SEV-SNP",
    "launch_measurement": "9f4e8c06de4a34c432fa8c11b8ba48ab90821c6cb527b1b350110e8b1a68f4c5",
    "firmware_version": "1.4.0",
    "score": 140,
    "feedback": [
      "Great for secure virtual machines, especially for sensitive workloads in hybrid cloud setups."
    ]
  },
  {
    "id": "001",
    "hardware_version": "Intel TDX",
    "launch_measurement": "c8a32f47e4b7b9ad302ee9d073c08b57b03273a3d7b2cf542c3df7d56d9135f5",
    "firmware_version": "2.1.0",
    "score": 100,
    "feedback": [
      "Works well with Intel CPUs but struggles with older firmware versions."
    ]
  },
  {
    "id": "hash_do_launch_measurement",
    "hardware_version": "AMD SEV-SNP",
    "firmware_version": "v1.2.3",
    "tee_version": "TEE-X",
    "initial_reliability_score": 75,
    "history_of_feedback": []
  },
  {
    "id": "009",
    "hardware_version": "AMD SEV-SNP",
    "launch_measurement": "ee0fcbf7c4f8f612caedb7c78eebc99e598cf907d10f9f88c8012466d0b9a572",
    "firmware_version": "1.2.4",
    "score": 155,
    "feedback": [
      "Highly recommended for cloud environments with sensitive workloads, offers excellent isolation."
    ]
  },
  {
    "id": "002",
    "hardware_version": "AMD SEV-SNP",
    "launch_measurement": "fb9a2b8b6a0abfe2239ccaf7058ac4878d34d2ad9d3c0474568102e9f2304c94",
    "firmware_version": "1.3.2",
    "score": 135,
    "feedback": [
      "Stable performance in cloud environments, but requires specific hardware configurations."
    ]
  },
  {
    "id": "003",
    "hardware_version": "Intel TDX",
    "launch_measurement": "6f1e3c1a6b9b098465a7854d44dffcbde8873b7db2b30de6959be8ec7639a473",
    "firmware_version": "2.2.1",
    "score": 120,
    "feedback": [
      "Verified to work in most environments, but performance may degrade under high load."
    ]
  },
  {
    "id": "010",
    "hardware_version": "Intel TDX",
    "launch_measurement": "b34b0c9cfdfe9c8d9b12f2d974c9f14292f58b1fdf3465c81cfbdba574f4e9e9",
    "firmware_version": "2.4.5",
    "score": 150,
    "feedback": [
      "Works efficiently in secure enclave environments, but requires a strong TPM implementation."
    ]
  },
  {
    "id": "006",
    "hardware_version": "ARM TrustZone",
    "launch_measurement": "13a509a7d928b6531d02145d4d01409f79cb587487890567ec7bc0d58deee768",
    "firmware_version": "2.2.1",
    "score": 120,
    "feedback": [
      "Suitable for secure mobile applications but may face performance issues under heavy load."
    ]
  }
];