import { motion } from 'framer-motion';
import { Truck, Box, Factory, Construction, Package, Leaf, Warehouse, Shield } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const transportOptions = [
  {
    icon: Box,
    title: "20'/28'/32' Open JCB Truck",
    description: "Ideal for construction equipment and machinery",
    capacity: "Upto 8-10 tonnes",
    idealFor: "JCB machines, construction equipment",
    image: "https://easygologistics.com/uploads/vehicle/image/12/28__JCB.jpg"
  },
  
  {
    icon: Package,
    title: "Low Bed Trailer",
    description: "For heavy and oversized cargo",
    capacity: "Upto 40 tonnes",
    idealFor: "Heavy machinery, industrial equipment",
    image: "https://img3.exportersindia.com/product_images/bc-full/dir_22/646887/low-bed-trailer-1511845630-3482677.jpg"
  },
  {
    icon: Truck,
    title: "Semi Low Bed Trailer",
    description: "Versatile heavy-duty transportation",
    capacity: "Upto 20 tonnes",
    idealFor: "Construction equipment, machinery",
    image: "https://media.karousell.com/media/photos/products/2019/07/12/171852_238779161_ed0cf238.jpg"
  },
  {
    icon: Warehouse,
    title: "Flat Bed Trailer",
    description: "Easy loading and unloading of cargo",
    capacity: "Upto 20 tonnes",
    idealFor: "Steel products, containers",
    image: "https://img2.exportersindia.com/product_images/bc-full/dir_8/228825/flatbed-trailers-117924.jpg"
  },
  {
    icon: Shield,
    title: "Taurus Trucks",
    description: "Powerful trucks for heavy loads",
    capacity: "Upto 16-45 tonnes",
    idealFor: "Heavy industrial cargo",
    image: "http://images.indialisted.com/nlarge/for_sale_ashok_leyland_taurus_10_tyres_1997387.jpg"
  },
  {
    icon: Box,
    title: "40' Container",
    description: "Large volume cargo transportation",
    capacity: "As per vehicle passing",
    idealFor: "Bulk shipments, international cargo",
    image: "https://5.imimg.com/data5/VT/YK/MY-35102591/32-feet-container-trucks-500x500.jpg"
  },
  {
    icon: Factory,
    title: "20'/22' Container",
    description: "Standard container transportation",
    capacity: "7 and 8 tonnes",
    idealFor: "General cargo, international shipping",
    image: "https://vamosys.com/wp-content/uploads/2022/02/container-truck.png"
  },
  {
    icon: Package,
    title: "28'/32' Container (SXL & MXL)",
    description: "Flexible container solutions",
    capacity: "15 and 18 tonnes",
    idealFor: "Various cargo types",
    image: "https://www.fr8.in/_next/image?url=%2Fimages%2F32-ft-sxl.webp&w=1200&q=80"
  },
  {
    icon: Truck,
    title: "9'/20'/22' Eicher",
    description: "Medium-duty transportation",
    capacity: "Upto 7-12 tonnes",
    idealFor: "Urban logistics, regional transport",
    image: "https://www.eichertrucksandbuses.com/_next/image?url=https:%2F%2Fcms.eichertrucksandbuses.com%2Fuploads%2Fbanner%2F48%2F6fd7306f4d3d1c979ff305cda41805a6.png&w=1920&q=75"
  },
  {
    icon: Leaf,
    title: "14'/17' Eicher",
    description: "Versatile city logistics",
    capacity: "3 and 5 tonnes",
    idealFor: "City distribution, local delivery",
    image: "http://kuttikkattmotors.com/images/gallery_7.jpg"
  },
  {
    icon: Shield,
    title: "Refrigerated Truck Transport",
    description: "Cold storage transport",
    capacity: "Upto 8 tonnes",
    idealFor: "Transporting frigid materials",
    image: "https://5.imimg.com/data5/PY/GS/MY-4617391/refrigerated-truck-transportation-service-500x500.jpg"
  },
  {
    icon: Warehouse,
    title: "Pickup / Chota Hathi",
    description: "Small-scale transportation",
    capacity: "1 and 1.5 tonnes",
    idealFor: "Last-mile delivery, small cargo",
    image: "https://5.imimg.com/data5/TP/CH/AC/GLADMIN-3061/mahindra-bolero-pickup-truck-500x500.jpg"
  }
];

export function TransportationOptions() {
  return (
    <div className="bg-slate-800 py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Fleet</h2>
          <p className="text-gray-400">Comprehensive range of vehicles for all your transportation needs</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {transportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={fadeInUp}
              custom={index}
              className="bg-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-orange-500 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <option.icon className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">{option.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="border-t border-slate-600 pt-4 mt-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Capacity:</span> {option.capacity}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Ideal for:</span> {option.idealFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}