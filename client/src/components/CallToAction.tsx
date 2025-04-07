import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Develop More Skills?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Continue your professional growth journey with our other courses designed to help you succeed in today's workplace.
          </p>
          <Button
            className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow transition"
          >
            Get More Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
