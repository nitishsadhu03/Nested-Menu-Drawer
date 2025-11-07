"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { menuData } from "../lib/menuData";

const NestedMenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStack, setMenuStack] = useState([menuData]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [slideDirection, setSlideDirection] = useState("none");

  const drawerRef = useRef(null);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);
  const animationTimeoutRef = useRef(null);

  const currentMenu = menuStack[menuStack.length - 1];
  const isRootMenu = menuStack.length === 1;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        isRootMenu &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, isRootMenu]);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const handleTouchStart = (e) => {
    if (!isRootMenu) return;
    startYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isRootMenu || !isDragging) return;
    currentYRef.current = e.touches[0].clientY;
    const diff = currentYRef.current - startYRef.current;
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!isRootMenu || !isDragging) return;
    setIsDragging(false);

    if (dragOffset > 80) {
      handleClose();
    } else {
      setDragOffset(0);
    }
  };

  const handleMouseDown = (e) => {
    if (!isRootMenu || e.button !== 0) return;
    startYRef.current = e.clientY;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isRootMenu || !isDragging) return;
    currentYRef.current = e.clientY;
    const diff = currentYRef.current - startYRef.current;
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleMouseUp = () => {
    if (!isRootMenu || !isDragging) return;
    setIsDragging(false);

    if (dragOffset > 80) {
      handleClose();
    } else {
      setDragOffset(0);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, isRootMenu]);

  const handleMenuItemClick = (item) => {
    if (item.submenu) {
      setIsAnimating(true);
      setSlideDirection("in");

      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = setTimeout(() => {
        setMenuStack([...menuStack, item.submenu]);
        setIsAnimating(false);
        setSlideDirection("none");
      }, 300);
    }
  };

  const handleBack = () => {
    if (menuStack.length > 1 && !isAnimating) {
      setIsAnimating(true);
      setSlideDirection("out");

      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = setTimeout(() => {
        setMenuStack(menuStack.slice(0, -1));
        setIsAnimating(false);
        setSlideDirection("none");
      }, 300);
    }
  };

  const handleClose = () => {
    setDragOffset(0);
    setIsOpen(false);
    setTimeout(() => {
      setMenuStack([menuData]);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-4">
      {/* Open Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        Open Menu
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={isRootMenu ? handleClose : undefined}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        style={{
          transform: isOpen
            ? `translateY(${dragOffset}px)`
            : "translateY(100%)",
          transition: isDragging
            ? "none"
            : "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 m-4 rounded-3xl md:max-w-2xl md:mx-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:m-0 ${
          isOpen ? "" : "pointer-events-none invisible"
        }`}
      >
        {/* Drag Handle - Only visible on root menu */}
        {isRootMenu && (
          <div
            className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full" />
          </div>
        )}

        {/* Menu Content */}
        <div className="flex flex-col max-h-[85vh] md:max-h-[75vh] rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-white flex items-center justify-between sticky top-0 z-10">
            {!isRootMenu ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating}
                aria-label="Go back"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium text-base">Back</span>
              </button>
            ) : (
              <div className="flex-1" />
            )}
          </div>

          {/* Menu Items Container */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div
              className={`transition-all duration-300 ${
                isAnimating
                  ? slideDirection === "in"
                    ? "opacity-0 translate-x-8"
                    : slideDirection === "out"
                    ? "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div
                className={`space-y-1 ${isRootMenu ? "px-4 pt-2 pb-4" : "p-4"}`}
              >
                {currentMenu.items.map((item, index) => {
                  const IconComponent = item.icon;
                  const hasSubmenu = !!item.submenu;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMenuItemClick(item)}
                      disabled={isAnimating}
                      style={{
                        animationDelay: `${index * 40}ms`,
                      }}
                      className="w-full text-left p-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-150 group animate-slideIn disabled:cursor-not-allowed"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold text-gray-900 text-base leading-tight">
                              {item.label}
                            </h3>
                            {hasSubmenu && (
                              <ChevronRight className="w-5 h-5 text-gray-800 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-1 leading-snug line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Safe Area */}
          <div className="h-6 bg-white" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        /* Hide scrollbar while keeping scroll functionality */
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }

        .overflow-y-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NestedMenuDrawer;
