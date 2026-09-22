import { Instagram, ExternalLink, Heart, Sparkles } from 'lucide-react';
import img1 from '../images/gallery_1.jpg';
import img2 from '../images/gallery_2.jpg';
import img3 from '../images/portfolio_nails.jpg';
import img4 from '../images/nail_babyboomer.jpg';
import img5 from '../images/nail_neumodellage.jpg';
import img6 from '../images/hero_nails.jpg';

export default function InstagramFeed() {
  const posts = [
    { img: img1, tag: "#babyboomer #horrem", likes: "142" },
    { img: img2, tag: "#frenchombre #gelnails", likes: "189" },
    { img: img3, tag: "#nailart #naildesign", likes: "234" },
    { img: img4, tag: "#glitzernails #beauty", likes: "167" },
    { img: img5, tag: "#neumodellage #acryl", likes: "205" },
    { img: img6, tag: "#newyorknails #studio", likes: "312" }
  ];

  return (
    <section id="instagram" className="py-16 sm:py-20 bg-white border-b border-[#ebdcd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full mb-3 shadow-xs">
              <Instagram className="w-3.5 h-3.5 text-[#b06758]" />
              <span>@newyorknails_horrem</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
              Aktuelle Studio-Looks auf Instagram
            </h2>
            <p className="text-stone-600 text-base mt-2 max-w-xl">
              Folgen Sie Kevin auf Instagram für tägliche Inspirationen, Nagelneuheiten und saisonale Farbtrends direkt aus Kerpen-Horrem.
            </p>
          </div>

          <a
            href="https://www.instagram.com/newyorknails_horrem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Auf Instagram folgen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/newyorknails_horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-xs border border-[#ebdcd2] bg-[#f3e7df] block"
            >
              <img
                src={post.img}
                alt={`New York Nails Horrem Look ${idx + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
                <Heart className="w-6 h-6 fill-white text-white mb-1.5" />
                <span className="text-xs font-bold">{post.likes} Likes</span>
                <span className="text-[10px] text-stone-200 mt-1 line-clamp-1">{post.tag}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
