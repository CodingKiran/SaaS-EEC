import React from 'react';
import { motion } from 'framer-motion';
import LessonCard from './LessonCard';

interface Lesson {
  title: string;
  content: string;
}

interface CoursePreviewProps {
  lessons: Lesson[];
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ lessons }) => {
  return (
    <section id="course-preview" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In just 5 days, you'll discover the strategic blindspots costing your SaaS business growth and revenue.
          </p>
        </motion.div>

        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;