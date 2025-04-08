import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getCourse } from "@/lib/data";

export default function ModulePage({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  const course = getCourse(params.courseId);

  if (!course || !course.modules_list) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Module Not Found</h1>
        <p className="text-zinc-400 mb-8">
          The module you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/learn">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Back to Courses
          </Button>
        </Link>
      </div>
    );
  }

  const moduleIndex = course.modules_list.findIndex(
    (m) => m.id === params.moduleId
  );

  if (moduleIndex === -1) {
    return (
      <div className="container px-4 py-12 md:py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Module Not Found</h1>
        <p className="text-zinc-400 mb-8">
          The module you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href={`/learn/${params.courseId}`}>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Back to Course
          </Button>
        </Link>
      </div>
    );
  }

  const mymodule = course.modules_list[moduleIndex];
  const prevModule =
    moduleIndex > 0 ? course.modules_list[moduleIndex - 1] : null;
  const nextModule =
    moduleIndex < course.modules_list.length - 1
      ? course.modules_list[moduleIndex + 1]
      : null;

  // Calculate progress
  const completedModules = course.modules_list.filter(
    (m) => m.completed
  ).length;
  const progressPercentage = Math.round(
    (completedModules / course.modules_list.length) * 100
  );

  return (
    <div className="container px-4 py-12 md:py-24">
      <Link
        href={`/learn/${params.courseId}`}
        className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Course
      </Link>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              {mymodule.title}
            </h1>
            <div className="flex items-center text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-6">
              <Clock className="mr-2 h-4 w-4 text-blue-500" />
              <span>{mymodule.duration}</span>
              <span className="mx-2">•</span>
              <BookOpen className="mr-2 h-4 w-4 text-purple-500" />
              <span>
                Module {moduleIndex + 1} of {course.modules_list.length}
              </span>
            </div>

            {/* Module content would go here - this is a placeholder */}
            <div className="prose prose-invert dark:prose-invert prose-zinc max-w-none">
              <h2>Introduction</h2>
              <p>
                Welcome to the {mymodule.title} module! In this module, you&apos;ll
                learn about the fundamentals of
                {course.title.includes("Arweave")
                  ? " Arweave and permanent storage"
                  : " Web3 development"}
                .
              </p>

              <p>
                This is a placeholder for the actual module content. In a real
                implementation, this would contain rich educational content
                including text, images, code examples, and interactive elements.
              </p>

              <h2>Learning Objectives</h2>
              <ul>
                <li>Understand the core concepts of {mymodule.title}</li>
                <li>
                  Learn how to apply these concepts in real-world scenarios
                </li>
                <li>Build practical skills through hands-on exercises</li>
                <li>Prepare for the next modules in this learning path</li>
              </ul>

              <h2>Key Concepts</h2>
              <p>The key concepts covered in this module include:</p>
              <ul>
                <li>Concept 1: Introduction and overview</li>
                <li>Concept 2: Technical foundations</li>
                <li>Concept 3: Practical applications</li>
                <li>Concept 4: Best practices and optimization</li>
              </ul>

              <h2>Hands-on Exercise</h2>
              <p>To reinforce your learning, try this hands-on exercise:</p>
              <div className="bg-zinc-800 dark:bg-zinc-800 bg-zinc-200 p-4 rounded-md">
                <p className="font-bold">
                  Exercise: Implement a basic {mymodule.title.toLowerCase()}{" "}
                  component
                </p>
                <ol>
                  <li>Set up your development environment</li>
                  <li>Create a new project using the provided template</li>
                  <li>Implement the required functionality</li>
                  <li>
                    Test your implementation against the provided test cases
                  </li>
                </ol>
              </div>

              <h2>Summary</h2>
              <p>
                In this module, you&apos;ve learned the fundamentals of{" "}
                {mymodule.title}. You now understand how these concepts fit into
                the broader context of {course.title} and are ready to move on
                to the next module.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            {prevModule ? (
              <Link href={`/learn/${params.courseId}/${prevModule.id}`}>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-400"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {prevModule.title}
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {nextModule ? (
              <Link href={`/learn/${params.courseId}/${nextModule.id}`}>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-400"
                >
                  {nextModule.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href={`/learn/${params.courseId}`}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Complete Module
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div>
          <div className="bg-zinc-900/50 dark:bg-zinc-900/50 bg-zinc-100/50 border border-zinc-800 dark:border-zinc-800 border-zinc-300 rounded-xl p-6 mb-8 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Course Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{progressPercentage}%</span>
              </div>
              <Progress
                value={progressPercentage}
                className="h-2 bg-zinc-800 dark:bg-zinc-800 bg-zinc-300"
              />
            </div>
            <h4 className="font-medium mb-3">{course.title}</h4>
            <ul className="space-y-2">
              {course.modules_list.map((m, i) => (
                <li key={m.id}>
                  <Link
                    href={`/learn/${params.courseId}/${m.id}`}
                    className={`flex items-center py-2 px-3 rounded-md text-sm ${
                      m.id === params.moduleId
                        ? "bg-zinc-800 dark:bg-zinc-800 bg-zinc-200 font-medium"
                        : "hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 hover:bg-zinc-200/50"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${
                        m.completed
                          ? "bg-green-500/20 text-green-500"
                          : "bg-zinc-700/20 dark:bg-zinc-700/20 bg-zinc-300/20 text-zinc-500"
                      } flex items-center justify-center mr-3 text-xs`}
                    >
                      {m.completed ? <Check className="h-3 w-3" /> : i + 1}
                    </div>
                    <span
                      className={
                        m.id === params.moduleId
                          ? "text-white dark:text-white text-zinc-900"
                          : "text-zinc-400 dark:text-zinc-400 text-zinc-600"
                      }
                    >
                      {m.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                {mymodule.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
