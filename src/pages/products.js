import prod1 from "../assets/images/service/cbc.jpg";
import prod2 from "../assets/images/service/ms.jpg";
import prod3 from "../assets/images/service/Mst.jpg";
import prod4 from "../assets/images/service/pct.jpg";
import prod5 from "../assets/images/service/pa.jpg";
import prod6 from "../assets/images/service/pcbs.jpg";
import prod7 from "../assets/images/service/fpp.jpg";
import prod8 from "../assets/images/service/mvsp.jpg";
import prod9 from "../assets/images/service/lvbsc.jpg";
import prod10 from "../assets/images/service/lv.jpg";

const products = [
  {
    id: 1,
    title: "Custom Busbar Supports",
    slug: "busbar-supports",
    description:
      "Engineered for unmatched durability and superior electrical safety, EMCO’s Custom Busbar Supports are designed to withstand extreme mechanical stress while maintaining insulation integrity. Manufactured from high-grade, flame-retardant, and corrosion-resistant materials, these supports ensure reliable long-term performance in the most demanding electrical environments. Each support undergoes rigorous quality checks to guarantee maximum load-bearing strength, dimensional stability, and vibration resistance. Perfect for large-scale power distribution systems, switchgear assemblies, and industrial electrical setups, our busbar supports provide the perfect balance of safety, reliability, and engineering precision.",
    image: prod1,
    pdf: "/assets/pdfs/busbar-supports.pdf",
    category: "Busbar Systems",
  },
  {
    id: 2,
    title: "Metal Spacer",
    slug: "metal-spacer",
    description:
      "EMCO’s Metal Spacers are precision-engineered components that provide strength, dimensional accuracy, and exceptional reliability in electrical panel assemblies. Built using premium metals with anti-corrosive properties, these spacers ensure optimal conductivity, structural integrity, and long-term performance. Designed to withstand mechanical load, high temperatures, and vibration, our metal spacers are the trusted choice for panel manufacturers, industrial power systems, and critical infrastructure projects. Their versatility allows seamless integration across a wide range of panel configurations while maintaining the highest safety and durability standards.",
    image: prod2,
    pdf: "/assets/pdfs/metal-spacer.pdf",
    category: "Panel Components",
  },
  {
    id: 3,
    title: "Metering Current Transformers",
    slug: "metering-ct",
    description:
      "EMCO’s Metering Current Transformers (CTs) are engineered to deliver highly accurate measurement and monitoring of electrical systems. Built for precision, these CTs provide consistent performance across a wide range of loads, ensuring reliable energy data for billing, monitoring, and efficiency optimization. Using superior magnetic core materials and robust insulation, our metering CTs guarantee long-term stability, reduced losses, and immunity to environmental stress. Designed for modern energy management systems, EMCO’s CTs support both low and high-voltage applications, helping industries achieve accuracy, compliance, and long service life in power monitoring operations.",
    image: prod3,
    pdf: "/assets/pdfs/metering-ct.pdf",
    category: "Current Transformers",
  },
  {
    id: 4,
    title: "Protection Current Transformer",
    slug: "protection-ct",
    description:
      "Engineered for system protection, EMCO’s Protection Current Transformers are designed to detect faults and ensure maximum safety in electrical systems. These CTs provide precise fault current measurements for protective relays, enabling quick and effective isolation of faults to prevent equipment damage. With robust construction, high dielectric strength, and advanced insulation technology, EMCO’s protection CTs deliver long-lasting performance even under extreme short-circuit conditions. Widely used in power utilities, switchgear, and industrial electrical networks, they are trusted for reliability, accuracy, and fail-safe operation.",
    image: prod4,
    pdf: "/assets/pdfs/protection-ct.pdf",
    category: "Current Transformers",
  },
  {
    id: 5,
    title: "Panel Accessories",
    slug: "panel-accessories",
    description:
      "EMCO offers a complete range of premium Panel Accessories designed to enhance the durability, safety, and efficiency of electrical panels. From precision-engineered connectors and fittings to structural components that improve panel integrity, our accessories are built with the highest attention to quality and performance. Each component undergoes rigorous testing for strength, insulation, and environmental resistance, ensuring long service life in industrial and commercial applications. By providing a one-stop solution for panel manufacturers, EMCO ensures seamless integration, reduced downtime, and unmatched reliability in every installation.",
    image: prod5,
    pdf: "/assets/pdfs/panel-accessories.pdf",
    category: "Panel Components",
  },
  {
    id: 6,
    title: "PCB Spacers",
    slug: "pcb-spacers",
    description:
      "EMCO’s PCB Spacers are designed to ensure precise spacing, insulation, and secure mounting of printed circuit boards in complex electrical and electronic systems. Manufactured from high-performance engineering plastics and metals, these spacers offer superior mechanical strength, dimensional stability, and electrical insulation. Resistant to heat, vibration, and mechanical stress, our PCB spacers are the trusted choice for critical applications in electronics, automation, and industrial panels. By guaranteeing long-term reliability and ease of assembly, EMCO’s spacers enhance the performance, durability, and safety of advanced electronic systems.",
    image: prod6,
    pdf: "/assets/pdfs/pcb-spacers.pdf",
    category: "PCB Components",
  },
  {
    id: 7,
    title: "FRP Pultruded Products",
    slug: "frp-products",
    description:
      "EMCO’s FRP Pultruded Products are lightweight yet incredibly strong, offering superior performance in harsh industrial environments. Built using advanced fiberglass-reinforced polymers, these products deliver excellent corrosion resistance, high tensile strength, and superior dielectric properties. They are widely used in power distribution, chemical plants, railways, and marine applications where durability, low maintenance, and environmental resilience are critical. EMCO’s FRP pultruded solutions are flame-retardant, weather-resistant, and engineered to provide long-lasting service even under extreme environmental conditions, making them a cost-effective and sustainable alternative to traditional materials.",
    image: prod7,
    pdf: "/assets/pdfs/frp-products.pdf",
    category: "FRP Solutions",
  },
  {
    id: 8,
    title: "Medium Voltage Standoff Insulators",
    slug: "mv-insulators",
    description:
      "EMCO’s Medium Voltage Standoff Insulators are engineered to provide mechanical support and electrical insulation for MV systems. Manufactured using high-grade insulating materials with superior dielectric strength, these insulators ensure safe and efficient energy distribution across medium-voltage applications. They are built to withstand electrical stress, environmental challenges, and mechanical loads, making them ideal for power plants, substations, and industrial switchgear. With precision engineering and strict quality control, EMCO’s MV insulators guarantee long service life, enhanced safety, and consistent performance under demanding operating conditions.",
    image: prod8,
    pdf: "/assets/pdfs/mv-insulators.pdf",
    category: "Insulators",
  },
  {
    id: 9,
    title: "Low Voltage Busbar Supports & Connectors",
    slug: "lv-busbar",
    description:
      "Compact yet robust, EMCO’s Low Voltage Busbar Supports & Connectors are designed for efficient and safe power distribution in electrical panels. Made from high-strength insulating materials and precision-machined connectors, these products provide excellent load-bearing capacity, superior dielectric performance, and long-term durability. They are engineered for compact panel designs where space optimization without compromising safety is critical. EMCO’s LV busbar supports and connectors reduce installation time, improve electrical efficiency, and enhance the overall reliability of low-voltage power distribution networks.",
    image: prod9,
    pdf: "/assets/pdfs/lv-busbar.pdf",
    category: "Busbar Systems",
  },
  {
    id: 10,
    title: "Low Voltage Standoff Insulators",
    slug: "lv-insulators",
    description:
      "Designed for superior safety and long-term reliability, EMCO’s Low Voltage Standoff Insulators are essential for modern electrical panels and low-voltage applications. Built from high-performance, flame-retardant, and mechanically strong insulating materials, these insulators deliver excellent dielectric properties and mechanical stability. They are resistant to electrical stress, moisture, and environmental degradation, ensuring consistent performance across a wide range of industrial and commercial installations. With their proven reliability and durability, EMCO’s LV insulators support safer operations and improved efficiency in critical low-voltage power systems.",
    image: prod10,
    pdf: "/assets/pdfs/lv-insulators.pdf",
    category: "Insulators",
  },
];

export default products;
