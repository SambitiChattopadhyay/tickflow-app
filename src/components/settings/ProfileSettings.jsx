// import { useState } from "react";
// import { User, Mail, Save } from "lucide-react";

// export default function ProfileSettings() {
//   const [username, setUsername] = useState("Samwati");
//   const [email, setEmail] = useState("samwati@example.com");

//   const handleSave = () => {
//     console.log({
//       username,
//       email,
//     });
//   };

//   return (
//     <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
//           <User size={20} />
//         </div>

//         <div>
//           <h2 className="text-lg font-semibold text-slate-900">
//             Profile
//           </h2>

//           <p className="text-sm text-slate-500">
//             Manage your profile information.
//           </p>
//         </div>
//       </div>

//       <div className="space-y-5">

//         <div>
//           <label className="text-sm font-medium text-slate-700">
//             Username
//           </label>

//           <div className="relative mt-2">
//             <User
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
//             />
//           </div>
//         </div>


//         <div>
//           <label className="text-sm font-medium text-slate-700">
//             Email
//           </label>

//           <div className="relative mt-2">
//             <Mail
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
//             />
//           </div>
//         </div>


//         <button
//           onClick={handleSave}
//           className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
//         >
//           <Save size={18} />
//           Save Changes
//         </button>

//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { User, Mail, Save } from "lucide-react";

// export default function ProfileSettings() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);


//   // GET ACTUAL LOGGED-IN USER PROFILE
//   useEffect(() => {
//     const getProfile = async () => {
//       try {
//         const response = await fetch(
//           "/api/auth/profile",
//           {
//             credentials: "include",
//           }
//         );

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(
//             data.message || "Failed to fetch profile"
//           );
//         }

//         // Set actual data from database
//         setUsername(data.username);
//         setEmail(data.email);

//       } catch (error) {
//         console.error(
//           "Profile fetch failed:",
//           error.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProfile();
//   }, []);


//   // SAVE PROFILE CHANGES
//   const handleSave = async () => {
//     try {
//       setSaving(true);

//       const response = await fetch(
//         "/api/auth/profile",
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           // Sends JWT cookie
//           credentials: "include",

//           body: JSON.stringify({
//             username,
//             email,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to update profile"
//         );
//       }

//       // Set fields to actual saved database values
//       setUsername(data.user.username);
//       setEmail(data.user.email);

//       console.log(
//         "Profile updated successfully"
//       );

//     } catch (error) {
//       console.error(
//         "Profile update failed:",
//         error.message
//       );
//     } finally {
//       setSaving(false);
//     }
//   };


//   // Loading state
//   if (loading) {
//     return (
//       <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
//         <p className="text-sm text-slate-500">
//           Loading profile...
//         </p>
//       </div>
//     );
//   }


//   return (
//     <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

//       <div className="flex items-center gap-3 mb-6">

//         <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
//           <User size={20} />
//         </div>

//         <div>
//           <h2 className="text-lg font-semibold text-slate-900">
//             Profile
//           </h2>

//           <p className="text-sm text-slate-500">
//             Manage your profile information.
//           </p>
//         </div>

//       </div>


//       <div className="space-y-5">

//         {/* USERNAME */}
//         <div>
//           <label className="text-sm font-medium text-slate-700">
//             Username
//           </label>

//           <div className="relative mt-2">

//             <User
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               type="text"
//               value={username}
//               onChange={(e) =>
//                 setUsername(e.target.value)
//               }
//               className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 outline-none focus:border-blue-500"
//             />

//           </div>
//         </div>


//         {/* EMAIL */}
//         <div>
//           <label className="text-sm font-medium text-slate-700">
//             Email
//           </label>

//           <div className="relative mt-2">

//             <Mail
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               type="email"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//               className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 outline-none focus:border-blue-500"
//             />

//           </div>
//         </div>


//         {/* SAVE BUTTON */}
//         <button
//           onClick={handleSave}
//           disabled={saving}
//           className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition disabled:opacity-60"
//         >
//           <Save size={18} />

//           {saving
//             ? "Saving..."
//             : "Save Changes"
//           }
//         </button>

//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { User, Mail, Save } from "lucide-react";


export default function ProfileSettings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  


  // GET PROFILE
  useEffect(() => {
    const getProfile = async () => {
      try {
        setError("");

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/profile`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();

        console.log("Profile response:", data);

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch profile"
          );
        }

        setUsername(data.username || "");
        setEmail(data.email || "");

      } catch (error) {
        console.error("Profile fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);


  // SAVE PROFILE
  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/profile`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            username,
            email,
          }),
        }
      );

      const data = await response.json();

      console.log("Update response:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update profile"
        );
      }

      setUsername(data.user?.username || username);
      setEmail(data.user?.email || email);

      alert("Profile updated successfully");

    } catch (error) {
      console.error("Profile update error:", error);
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };


  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
          <User size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Profile
          </h2>

          <p className="text-sm text-slate-500">
            Manage your profile information.
          </p>
        </div>

      </div>


      {loading ? (

        <p className="text-slate-500">
          Loading profile...
        </p>

      ) : (

        <div className="space-y-5">

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}


          {/* USERNAME */}
          <div>

            <label className="text-sm font-medium text-slate-700">
              Username
            </label>

            <div className="relative mt-2">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />

            </div>

          </div>


          {/* EMAIL */}
          <div>

            <label className="text-sm font-medium text-slate-700">
              Email
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />

            </div>

          </div>


          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition disabled:opacity-60"
          >
            <Save size={18} />

            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

      )}

    </div>
  );
}
