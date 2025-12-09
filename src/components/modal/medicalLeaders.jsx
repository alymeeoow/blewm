import React, { useEffect } from 'react';
import { FaTimes, FaUniversity, FaBriefcase, FaFilm, FaMicrophone, FaGraduationCap, FaAward, FaBook, FaStethoscope, FaHeart, FaUsers, FaHospital, FaHeartbeat } from 'react-icons/fa';
import '../../assets/styles/modals/medicalLeaders.css';
import DrGreg from "../../assets/images/about/dr-greg.webp";
import DrSosa from "../../assets/images/about/dr-sosa.webp";
import DrJoel from "../../assets/images/about/dr-joel.webp";

const MedicalLeaderModal = ({ leader, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const leadersData = {
    'greg-smith': {
      title: "Chief Medical Officer - Lifestyle Wellness",
      name: "Greg A. Smith, M.D.",
      company: "President & CEO, Red Pill Medical, Inc.",
      image: DrGreg,
      sections: [
        {
          icon: <FaUniversity />,
          title: "Academic & Hospital Roles",
          content: [
            "Former Director of Pain Management at Harbor UCLA",
            "Assistant Clinical Professor at UCLA"
          ]
        },
        {
          icon: <FaBriefcase />,
          title: "Professional Leadership",
          content: [
            "President & CEO of Red Pill Medical, Inc.",
            "President & Medical Director of Comprehensive Pain Relief Group Inc. (2001)",
            "President & Medical Director of GS Medical Center Inc. (2004)"
          ]
        },
        {
          icon: <FaHeartbeat />,
          title: "Medical Innovations",
          content: [
            "Creator of the NESP Program (Nutritional, Emotional, Social, Physical) to combat addiction and chronic pain (2005)",
            "Specializes in medical-grade cannabinoid supplements and pharmaceutical development"
          ]
        },
        {
          icon: <FaFilm />,
          title: "Media Productions",
          content: [
            "Executive producer of American Addict (2013)",
            "Co-writer of American Addict 2, The Big Lie (2016)",
            "American Weed documentary in production (2019)"
          ]
        },
        {
          icon: <FaMicrophone />,
          title: "Media & Speaking",
          content: [
            "Hosted 'Truth, Medicine, and Politics' radio show on KABC Los Angeles",
            "Regular guest on national radio and television programs",
            "Nationally recognized speaker on integrative medicine"
          ]
        },
        {
          icon: <FaUsers />,
          title: "Personal",
          content: [
            "Resides in Redondo Beach, CA with family"
          ]
        }
      ]
    },
    'john-sosa': {
      title: "Chief Medical Officer - Lifestyle Medications",
      name: "John P. Sosa, M.D., DipABLM",
      company: "Double Board Certified: Family & Lifestyle Medicine",
      image: DrSosa,
      sections: [
        {
          icon: <FaGraduationCap />,
          title: "Education",
          content: [
            "Brother Rice High School, Bloomfield Hills, MI",
            "University of Michigan, Ann Arbor (Anthropology-Zoology)",
            "American University of the Caribbean School of Medicine"
          ]
        },
        {
          icon: <FaHospital />,
          title: "Medical Training",
          content: [
            "3 years General Surgery residency at St. Joseph Mercy-Oakland Hospital, Pontiac, MI",
            "2 years Family Medicine residency at Providence Hospital, Southfield, MI",
            "Chief Resident in final year"
          ]
        },
        {
          icon: <FaBriefcase />,
          title: "Professional Experience",
          content: [
            "10 years with BayCare Medical Group in Tampa, FL providing primary care",
            "Inaugural class Board Certified by American College of Lifestyle Medicine (2017)",
            "Founded first Direct Primary Care Lifestyle Medicine and Aesthetic practice (2019)"
          ]
        },
        {
          icon: <FaHeart />,
          title: "Clinical Focus",
          content: [
            "Health optimization and longevity",
            "Maximizing healthspan and lifespan",
            "Plant-based nutrition advocate",
            "Preventive care specialist"
          ]
        },
        {
          icon: <FaUsers />,
          title: "Professional Affiliations",
          content: [
            "American Academy of Family Physicians (AAFP)",
            "American College of Lifestyle Medicine (ACLM)",
            "American Academy of Anti-Aging Medicine (A4M)",
            "American Society for Laser Medicine & Surgery (ASLMS)"
          ]
        },
        {
          icon: <FaUsers />,
          title: "Personal Life",
          content: [
            "Vegan lifestyle advocate",
            "Fitness enthusiast",
            "Avid sports and movie fan",
            "Blended family with four children"
          ]
        }
      ]
    },
    'joel-kahn': {
      title: "Chief Medical Officer",
      name: "Joel Kahn, M.D., FACC",
      company: "Triple Board Certified Cardiologist",
      image: DrJoel,
      sections: [
        {
          icon: <FaBriefcase />,
          title: "Role at Blewm",
          content: [
            "Chief Medical Officer at Blewm Wellness",
            "Creator of all specialized IV treatments",
            "Medical Director since 2018"
          ]
        },
        {
          icon: <FaStethoscope />,
          title: "Medical Practice",
          content: [
            "Practicing cardiologist",
            "Clinical Professor at Wayne State University School of Medicine",
            "First physician certified in Metabolic Cardiology (A4M/MMI)",
            "Founder of Kahn Center for Cardiac Longevity, Bingham Farms, MI"
          ]
        },
        {
          icon: <FaAward />,
          title: "Board Certifications",
          content: [
            "Triple board certified: Internal Medicine, Cardiovascular Medicine, Interventional Cardiology",
            "Known as 'America's Healthy Heart Doc'"
          ]
        },
        {
          icon: <FaGraduationCap />,
          title: "Education",
          content: [
            "University of Michigan Medical School (Summa Cum Laude)"
          ]
        },
        {
          icon: <FaHeart />,
          title: "Philosophy & Advocacy",
          content: [
            "Plant-based nutrition advocate",
            "Co-founded largest plant-based nutrition support group (PBNSG)",
            "World's top holistic cardiologist"
          ]
        },
        {
          icon: <FaMicrophone />,
          title: "Media Presence",
          content: [
            "Regular appearances on Dr. Phil, The Doctors Show, Dr. Oz",
            "Guest on Larry King Now, Joe Rogan Experience",
            "Host of 'Heart Doc VIP' podcast (5+ years)",
            "Health Hero award from Detroit Crain's Business"
          ]
        },
        {
          icon: <FaBook />,
          title: "Publications",
          content: [
            "Your Whole Heart Solution",
            "Dead Execs Don't Get Bonuses",
            "The Plant Based Solution",
            "Lipoprotein(a): The Heart's Silent Killer",
            "Plus 2 additional health books"
          ]
        }
      ]
    }
  };

  const leaderData = leadersData[leader];

  if (!leaderData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-image">
              <img src={leaderData.image} alt={leaderData.name} />
            </div>
            <div className="modal-header-info">
              <h2 className="modal-name">{leaderData.name}</h2>
              <h3 className="modal-title">{leaderData.title}</h3>
              <p className="modal-company">{leaderData.company}</p>
            </div>
          </div>

          <div className="modal-body">
            <div className="modal-sections">
              {leaderData.sections.map((section, index) => (
                <div key={index} className="modal-section">
                  <div className="modal-section-header">
                    <div className="modal-section-icon">
                      {section.icon}
                    </div>
                    <h4 className="modal-section-title">{section.title}</h4>
                  </div>
                  <ul className="modal-section-content">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="modal-section-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalLeaderModal;