import { Instagram, ExternalLink, Heart, Sparkles, MessageCircle } from 'lucide-react';
import img1 from '../images/gallery_1.jpg';
import img2 from '../images/gallery_2.jpg';
import img3 from '../images/portfolio_nails.jpg';
import img4 from '../images/nail_babyboomer.jpg';
import img5 from '../images/nail_neumodellage.jpg';
import img6 from '../images/hero_nails.jpg';

export default function InstagramFeed() {
  const posts = [
    { img: img1, tag: "Liquid Chrome Chic", likes: "194" },
    { img: img2, tag: "Manhattan Minimalist Art", likes: "283" },
    { img: img3, tag: "Glazed Donut Nails", likes: "321" },
    { img: img4, tag: "Babyboomer Diamond Fade", likes: "247" },
    { img: img5, tag: "Precision C-Curve Full Set", likes: "309" },
    { img: img6, tag: "Russian Cuticle Architecture", likes: "418" }
  ];

  return (
    <section id="instagram" className="py-20 sm:py-24 bg-[#0b0c10] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-sans font-semibold uppercase tracking-widest mb-4">
              <Instagram className="w-3.5 h-3.5" />
              <span>@newyorknails_horrem</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-normal">
              Das Manhattan Lookbook auf <span className="italic text-[#c5a059]">Instagram</span>
            </h2>
            <p className="font-sans text-slate-300 text-base mt-3 max-w-xl">
              Entdecken Sie täglich neue Modellagen, Farbkreationen und virale Trends direkt aus Kevins Atelier in Kerpen-Horrem.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/newyorknails_horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-sans font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Auf Instagram folgen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/newyorknails_horrem/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-[#141722] block"
            >
              <img
                src={post.img}
                alt={`New York Nails Look - ${post.tag}`}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 text-center text-white font-sans">
                <Heart className="w-5 h-5 fill-[#c5a059] text-[#c5a059] mb-1.5" />
                <span className="text-xs font-bold text-white">{post.likes} Likes</span>
                <span className="text-[11px] text-[#c5a059] font-medium mt-1 line-clamp-1">{post.tag}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Inspiration Note */}
        <div className="mt-10 text-center font-sans">
          <p className="text-xs text-slate-400">
            Haben Sie ein Bild auf Instagram oder TikTok gesehen?{' '}
            <a
              href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20habe%20ein%20Inspo-Foto%20von%20Instagram%20und%20m%C3%B6chte%20fragen%20ob%20wir%20das%20umsetzen%20k%C3%B6nnen."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a059] hover:underline font-semibold"
            >
              Foto direkt per WhatsApp an Kevin senden
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
